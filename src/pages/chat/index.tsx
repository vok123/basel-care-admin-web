import {
  IPostDoctorGetConsultationPageRes,
  IPostPatientGetConsultationRes,
  postDoctorGetConsultation,
  postDoctorGetConsultationPage,
  postDoctorReplyMessage,
} from "@/api";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import "./index.less";
import { MessageItem } from "@/components/complex/MessageItem";
import { useToken } from "@/hooks/useToken";
import { useEventListener } from "ahooks";

type ConsultationItem =
  Required<IPostDoctorGetConsultationPageRes>["list"][number];

function Chat() {
  const [list, setList] = useState<ConsultationItem[]>([]);
  const [content, setContent] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [curConsultation, setCurConsultation] =
    useState<IPostPatientGetConsultationRes>();
  const [msgLoading, setMsgLoading] = useState(true);
  const [listLoading, setListLoading] = useState(true);
  const scrollViewRef = useRef<HTMLDivElement>(null);
  const messageTimerRef = useRef<NodeJS.Timeout | null>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [getToken] = useToken();
  const cid = useRef<string>("");
  const [searchValue, setSearchValue] = useState("");
  const isVisibleRef = useRef(true);

  useEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      isVisibleRef.current = true;
      if (cid.current) {
        setMsgLoading(true);
        loopNewMessage();
        loopConsultation();
      }
    } else if (document.visibilityState === "hidden") {
      console.log("页面不可见，停止轮询");
      isVisibleRef.current = false;
      clearTimeout(messageTimerRef.current!);
      clearTimeout(timer.current!);
      setMsgLoading(false);
      setListLoading(false);
    }
  });

  const msgList = useMemo(() => {
    return curConsultation?.messages || [];
  }, [curConsultation?.messages]);

  const finalList = useMemo(() => {
    if (!searchValue) {
      return list;
    }
    return list.filter((item) =>
      item.patientName?.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [list, searchValue]);

  const scrollToBottom = useCallback(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        top: scrollViewRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const sendMsg = () => {
    if (!content) {
      return;
    }
    setSubmitLoading(true);
    postDoctorReplyMessage({
      consultationId: curConsultation?.id,
      content,
    })
      .then(() => {
        setContent("");
        setCurConsultation((prev) => {
          if (!prev) {
            return prev;
          }
          return {
            ...prev,
            messages: (prev.messages || []).concat({
              content,
              createdAt: dayjs().format("YYYY/MM/DD HH:mm:ss"),
              senderType: "DOCTOR",
            }),
          };
        });
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  const loopNewMessage = useCallback(() => {
    clearTimeout(messageTimerRef.current!);
    if (!getToken()) {
      return;
    }
    if (cid.current) {
      postDoctorGetConsultation({
        consultationId: cid.current!,
      })
        .then((res) => {
          setCurConsultation(res);
        })
        .finally(() => {
          setMsgLoading(false);

          messageTimerRef.current = setTimeout(() => {
            loopNewMessage();
          }, 1400);
        });
    }
  }, [getToken]);

  const loopConsultation = useCallback(() => {
    if (!getToken()) {
      clearTimeout(timer.current!);
      return;
    }
    if (!isVisibleRef.current) {
      clearTimeout(timer.current!);
      return;
    }
    postDoctorGetConsultationPage({
      pageNo: 1,
      pageSize: 200,
    })
      .then((res) => {
        setList(res.list || []);
        if (!cid.current) {
          cid.current = String(res.list?.[0]?.id || "");
          loopNewMessage();
        }
      })
      .finally(() => {
        setListLoading(false);
        timer.current = setTimeout(() => {
          loopConsultation();
        }, 1200);
      });
  }, [getToken, loopNewMessage]);

  useEffect(() => {
    loopConsultation();
    return () => {
      clearTimeout(timer.current!);
    };
  }, [loopConsultation, timer]);

  useEffect(() => {
    scrollToBottom();
  }, [msgList, scrollToBottom]);

  return (
    <div className="flex m-3" style={{ height: "calc(100% - 24px)" }}>
      <div
        style={{ width: "250px" }}
        className="slider bg h-full  flex flex-col gap-3 rounded-[8px]"
      >
        <div className="slider-header pt-3 flex flex-col gap-2 px-4">
          <div className="slider-title">Chat</div>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search ..."
          />
        </div>

        <div className="slider-content  flex flex-col gap-2 flex-1 overflow-y-auto">
          {listLoading ? (
            <div className="c-gray-4 text-center">Loading...</div>
          ) : !finalList?.length ? (
            <div className="c-gray-4 text-center">No Data</div>
          ) : null}
          {finalList.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  cid.current = String(item.id);
                  setMsgLoading(true);
                  setCurConsultation(undefined);
                  loopNewMessage();
                }}
                className={`slider-content-item hover:bg-[#EEF4F4]  py-1 rounded-[8px] cursor-pointer ${cid.current === String(item.id) ? "bg-[#EEF4F4]" : ""}`}
              >
                <div className="flex justify-between items-center px-4">
                  <div className="item-title font-bold ">
                    {item.patientName}
                  </div>
                  <div className="item-time c-gray-4 text-xs font-400">
                    {dayjs(item.createdAt).format("HH:mm:ss")}
                  </div>
                </div>
                <div className="flex justify-between items-center px-3">
                  {/* 超出变... */}
                  <div className="item-preview-content text-xs font-400 flex w-[80%] pr-3 overflow-hidden text-ellipsis text-clip">
                    {item.lastMessage?.content}
                  </div>
                  {item.unreadMessageCount! > 0 ? (
                    <div className="item-count font-400 bg-[#17828E] w-[20px] h-[20px] leading-[20px] text-center text-xs color-gray-50 rounded-full">
                      {item.unreadMessageCount}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {cid.current ? (
        <div className="flex-1 bg h-full rounded-[8px] ml-3 overflow-hidden relative flex flex-col">
          <div className="chat-header bg-[#EEF4F4] px-3 py-3 card-header">
            <div className="chat-header-title font-bold text-center h-[22px] flex justify-center gap-3">
              {curConsultation?.patientName}
              {curConsultation ? <PatientInfo patientId={curConsultation?.patientId} /> : null}
            </div>
          </div>

          <div
            ref={scrollViewRef}
            className="p-4 py-3 pb-30 flex-1 overflow-y-auto"
          >
            {msgLoading ? (
              <div className="c-gray-4 text-center">Loading...</div>
            ) : null}
            {/* 消息列表 */}
            {msgList.map((item, index) => {
              return (
                <div key={index} className="chat-item-wrapper">
                  {/* 用户发送的消息居左 */}
                  {item.senderType === "PATIENT" ? (
                    <MessageItem data={item} />
                  ) : null}
                  {/* 我发送的消息居右 */}
                  {item.senderType === "DOCTOR" ? (
                    <div className="chat-item flex items-center gap-3 mt-3 justify-end">
                      <div className="time font-400 c-gray-4">
                        {dayjs(item.createdAt).format("YYYY/MM/DD HH:mm:ss")}
                      </div>
                      <div
                        className="rounded-[12px] text-base font-400 bg-[#17828E] text-white py-[6px] px-[12px]"
                        style={{ borderBottomRightRadius: 0 }}
                      >
                        {item.content}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="user-message-input px-4 flex gap-3 items-center bg py-3 absolute bottom-0 left-0 right-0">
            <TextArea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  sendMsg();
                }
              }}
              disabled={submitLoading}
              className="flex-1 bg"
              placeholder="Type your message here"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <Button
              disabled={!content}
              loading={submitLoading}
              onClick={sendMsg}
              type="primary"
            >
              Send
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Chat;
