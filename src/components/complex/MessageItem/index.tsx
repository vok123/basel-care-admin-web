import {
  IPostDoctorGetConsultationPageRes,
  postDoctorReadMessage,
} from "@/api";
import dayjs from "dayjs";
import { memo, useEffect, useRef } from "react";

type ConsultationItem =
  Required<IPostDoctorGetConsultationPageRes>["list"][number];

type MessageItemType = Required<ConsultationItem>["messages"][number];

interface MessageItemProps {
  data: MessageItemType;
}

export const MessageItem = memo<MessageItemProps>((props) => {
  const { data } = props;

  // 使用浏览器api检测元素是否已经被浏览
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    if (data.hasRead) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            postDoctorReadMessage({
              messageId: String(data.id),
            });
          }
        });
      },
      {
        threshold: 0.1, // 元素有10%进入视口就触发
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [data]);

  return (
    <div ref={itemRef} className="chat-item flex items-center gap-3 mt-3">
      <div
        className="rounded-[12px] text-base font-400 bg-[#E5EEEE] py-[6px] px-[12px]"
        style={{ borderBottomLeftRadius: 0 }}
      >
        {data.content}
      </div>
      <div className="time font-400 c-gray-4">
        {dayjs(data.createdAt).format("YYYY/MM/DD HH:mm:ss")}
      </div>
    </div>
  );
});
