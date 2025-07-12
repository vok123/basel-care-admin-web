import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  IPostDoctorGetConsultationPageRes,
  IPostPatientGetConsultationRes,
  postDoctorGetConsultation,
  postDoctorGetConsultationPage,
  postDoctorReplyMessage,
} from "@/api";
import { getLocalInfo } from "@south/utils";
import { TOKEN } from "@/utils/config";

type ConsultationItem =
  Required<IPostDoctorGetConsultationPageRes>["list"][number];

// 获取token的辅助函数
const getToken = () => {
  return getLocalInfo<string>(TOKEN) || "";
};

interface ChatState {
  // 状态
  list: ConsultationItem[];
  curConsultation?: IPostPatientGetConsultationRes;
  msgLoading: boolean;
  listLoading: boolean;
  currentConsultationId: string;
  searchValue: string;
  isPolling: boolean;
  isPageVisible: boolean;

  // 定时器引用
  messageTimerRef?: NodeJS.Timeout;
  listTimerRef?: NodeJS.Timeout;

  // 动作
  setList: (list: ConsultationItem[]) => void;
  setCurConsultation: (consultation?: IPostPatientGetConsultationRes) => void;
  setMsgLoading: (loading: boolean) => void;
  setListLoading: (loading: boolean) => void;
  setCurrentConsultationId: (id: string) => void;
  setSearchValue: (value: string) => void;
  setPageVisible: (visible: boolean) => void;

  // 轮询相关
  startPolling: () => void;
  stopPolling: () => void;
  loopConsultationList: () => void;
  loopNewMessage: () => void;

  // 页面可见性管理
  initVisibilityListener: () => void;
  cleanupVisibilityListener: () => void;

  // 消息相关
  sendMessage: (content: string) => Promise<void>;

  // 通知相关
  showNotification: (title: string, body: string) => void;
  requestNotificationPermission: () => Promise<void>;
}

export const useChatStore = create<ChatState>()(
  devtools(
    (set, get) => ({
      // 初始状态
      list: [],
      curConsultation: undefined,
      msgLoading: false,
      listLoading: false,
      currentConsultationId: "",
      searchValue: "",
      isPolling: false,
      isPageVisible: true,

      // 基本设置方法
      setList: (list) => set({ list }),
      setCurConsultation: (consultation) =>
        set({ curConsultation: consultation }),
      setMsgLoading: (loading) => set({ msgLoading: loading }),
      setListLoading: (loading) => set({ listLoading: loading }),
      setCurrentConsultationId: (id) => set({ currentConsultationId: id }),
      setSearchValue: (value) => set({ searchValue: value }),
      setPageVisible: (visible) => set({ isPageVisible: visible }),

      // 开始轮询
      startPolling: () => {
        const state = get();
        if (state.isPolling) return;

        set({ isPolling: true });
        state.loopConsultationList();
      },

      // 停止轮询
      stopPolling: () => {
        const state = get();
        if (state.messageTimerRef) {
          clearTimeout(state.messageTimerRef);
        }
        if (state.listTimerRef) {
          clearTimeout(state.listTimerRef);
        }
        set({
          isPolling: false,
          messageTimerRef: undefined,
          listTimerRef: undefined,
        });
      },

      // 页面可见性管理
      initVisibilityListener: () => {
        const handleVisibilityChange = () => {
          const state = get();
          if (document.visibilityState === "visible") {
            state.setPageVisible(true);
            if (state.currentConsultationId) {
              state.setMsgLoading(true);
              state.loopNewMessage();
              state.loopConsultationList();
            }
          } else {
            state.setPageVisible(false);
            state.stopPolling();
          }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return handleVisibilityChange;
      },

      cleanupVisibilityListener: () => {
        // 这个方法在组件卸载时调用，清理监听器
        // 实际的清理逻辑应该在调用方保存监听器引用并清理
      },

      // 轮询会话列表
      loopConsultationList: () => {
        const state = get();

        if (state.listTimerRef) {
          clearTimeout(state.listTimerRef);
        }

        if (!getToken()) {
          return;
        }

        if (!state.isPolling || !state.isPageVisible) {
          return;
        }

        postDoctorGetConsultationPage({
          pageNo: 1,
          pageSize: 200,
        })
          .then((res) => {
            const currentState = get();
            const newList = res.list || [];

            // 检查是否有新消息并发送通知
            if (currentState.list.length > 0) {
              const hasNewPatientMessage = newList.some((newItem) => {
                const oldItem = currentState.list.find(
                  (oldItem) => oldItem.id === newItem.id,
                );
                return (
                  oldItem &&
                  (newItem.unreadMessageCount || 0) >
                    (oldItem.unreadMessageCount || 0) &&
                  newItem.lastMessage?.senderType === "PATIENT"
                );
              });

              if (hasNewPatientMessage) {
                const newPatientMessages = newList.filter((newItem) => {
                  const oldItem = currentState.list.find(
                    (oldItem) => oldItem.id === newItem.id,
                  );
                  return (
                    oldItem &&
                    (newItem.unreadMessageCount || 0) >
                      (oldItem.unreadMessageCount || 0) &&
                    newItem.lastMessage?.senderType === "PATIENT"
                  );
                });

                newPatientMessages.forEach((item) => {
                  currentState.showNotification(
                    `BaselCare App: ${item.patientName}`,
                    item.lastMessage?.content || "You have a new message",
                  );
                });
              }
            }

            set({ list: newList });

            // 如果当前没有选中的会话，自动选择第一个
            if (!currentState.currentConsultationId && newList.length > 0) {
              const firstId = String(newList[0].id);
              set({ currentConsultationId: firstId });
              get().loopNewMessage();
            }
          })
          .finally(() => {
            set({ listLoading: false });
            const currentState = get();
            if (currentState.isPolling && currentState.isPageVisible) {
              const listTimerRef = setTimeout(() => {
                get().loopConsultationList();
              }, 1200);
              set({ listTimerRef });
            }
          });
      },

      // 轮询新消息
      loopNewMessage: () => {
        const state = get();

        if (state.messageTimerRef) {
          clearTimeout(state.messageTimerRef);
        }

        if (!getToken()) {
          return;
        }

        if (!state.currentConsultationId) {
          return;
        }

        postDoctorGetConsultation({
          consultationId: state.currentConsultationId,
        })
          .then((res) => {
            set({ curConsultation: res });
          })
          .finally(() => {
            set({ msgLoading: false });
            const currentState = get();
            if (
              currentState.isPolling &&
              currentState.currentConsultationId &&
              currentState.isPageVisible
            ) {
              const messageTimerRef = setTimeout(() => {
                get().loopNewMessage();
              }, 1400);
              set({ messageTimerRef });
            }
          });
      },

      // 发送消息
      sendMessage: async (content: string) => {
        const state = get();
        if (!content || !state.curConsultation?.id) {
          throw new Error("Invalid message content or consultation");
        }

        await postDoctorReplyMessage({
          consultationId: state.curConsultation.id,
          content,
        });

        // 立即更新本地状态
        set({
          curConsultation: {
            ...state.curConsultation,
            messages: (state.curConsultation.messages || []).concat({
              content,
              createdAt: new Date().toISOString(),
              senderType: "DOCTOR",
            }),
          },
        });
      },

      // 显示通知
      showNotification: (title: string, body: string) => {
        if (!("Notification" in window)) {
          console.warn("This browser does not support notifications.");
          return;
        }
        if (Notification.permission !== "granted") {
          console.warn("Notification permission not granted.");
          return;
        }
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(title, {
            body,
            icon: import.meta.env.DEV ? "/logo.png" : '/admin/logo.png',
          });
        }
      },

      // 请求通知权限
      requestNotificationPermission: async () => {
        if ("Notification" in window && Notification.permission === "default") {
          await Notification.requestPermission();
        }
      },
    }),
    {
      enabled: process.env.NODE_ENV === "development",
      name: "chatStore",
    },
  ),
);
