import { useMemo, useCallback, useEffect, useState, useRef } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import "./index.less";
import { MessageItem } from "@/components/complex/MessageItem";
import { PatientInfo } from "@/components/complex/PatientInfo";
import { useChatStore } from "@/stores";

function Chat() {
  const [content, setContent] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const scrollViewRef = useRef<HTMLDivElement>(null);

  const {
    list,
    curConsultation,
    msgLoading,
    listLoading,
    currentConsultationId,
    searchValue,
    setSearchValue,
    setCurrentConsultationId,
    setCurConsultation,
    setMsgLoading,
    startPolling,
    stopPolling,
    loopNewMessage,
    sendMessage,
    requestNotificationPermission,
  } = useChatStore();

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

  const handleSendMsg = async () => {
    if (!content) {
      return;
    }
    setSubmitLoading(true);
    try {
      await sendMessage(content.trimEnd());
      setContent("");
    } catch (error) {
      console.error("发送消息失败:", error);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleConsultationClick = (consultationId: string) => {
    setCurrentConsultationId(consultationId);
    setMsgLoading(true);
    setCurConsultation(undefined);
    loopNewMessage();
  };

  // 组件挂载时开始轮询并请求通知权限
  useEffect(() => {
    startPolling();
    requestNotificationPermission();

    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling, requestNotificationPermission]);

  // 消息列表变化时滚动到底部
  useEffect(() => {
    scrollToBottom();
  }, [msgList.length, scrollToBottom]);

  return (
    <div className="flex m-3" style={{ height: "calc(100% - 24px)" }}>
      <div
        style={{ width: "250px" }}
        className="slider bg h-full  flex flex-col gap-3 rounded-[8px]"
      >
        <div className="slider-header pt-3 flex flex-col gap-2 px-4">
          <div className="slider-title">Chat</div>
          <Input
            value={searchValue}
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
                onClick={() => handleConsultationClick(String(item.id))}
                className={`slider-content-item hover:bg-[#EEF4F4]  py-1 rounded-[8px] cursor-pointer ${currentConsultationId === String(item.id) ? "bg-[#EEF4F4]" : ""}`}
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
                  <div className="item-preview-content text-xs font-400 w-[84%] pr-3">
                    {item.lastMessage?.content}
                  </div>
                  {(item.unreadMessageCount || 0) > 0 ? (
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

      {currentConsultationId ? (
        <div className="flex-1 bg h-full rounded-[8px] ml-3 overflow-hidden relative flex flex-col">
          <div className="chat-header bg-[#EEF4F4] px-3 py-3 card-header">
            <div className="chat-header-title font-bold text-center h-[22px] flex justify-center gap-3">
              {curConsultation?.patientName}
              {curConsultation ? (
                <PatientInfo patientId={curConsultation?.patientId} />
              ) : null}
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
                  handleSendMsg();
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
              onClick={handleSendMsg}
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
