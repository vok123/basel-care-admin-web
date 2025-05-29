import React, {
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Spin, message, Typography } from "antd";
import { postUserForgotPassword, postUserSendEmailCode } from "@/api";

const { Text } = Typography;

const COUNTDOWN_KEY = "send_code_countdown";
const COUNTDOWN_START_KEY = "send_code_countdown_start";
const COUNTDOWN_DURATION = 60;

interface SendCodeProps {
  value?: string;
  valueInfo?: Record<string, any>;
  type: "forgotPassword" | "register";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SendCodeWrapper: React.FC<SendCodeProps> = ({
  valueInfo,
  type,
  children,
  className,
  style,
  ...restProps
}) => {
  const [countdown, setCountdown] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();

  // 初始化检查本地倒计时
  useEffect(() => {
    try {
      const storedStartTime = localStorage.getItem(COUNTDOWN_START_KEY);
      const storedCountdown = localStorage.getItem(COUNTDOWN_KEY);
      if (storedStartTime && storedCountdown) {
        const startTime = parseInt(storedStartTime, 10);
        const duration = parseInt(storedCountdown, 10);
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        if (elapsedSeconds < duration) {
          const remaining = duration - elapsedSeconds;
          setCountdown(remaining);
          startCountdown(remaining);
        } else {
          localStorage.removeItem(COUNTDOWN_KEY);
          localStorage.removeItem(COUNTDOWN_START_KEY);
        }
      }
    } catch (e) {
      console.error("Failed to load countdown from storage", e);
    }
    // 清理定时器
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, []);

  const startCountdown = useCallback((duration: number) => {
    setCountdown(duration);
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          localStorage.removeItem(COUNTDOWN_KEY);
          localStorage.removeItem(COUNTDOWN_START_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const sendCode = useCallback(() => {
    if (!valueInfo?.email) {
      message.warning(t("Please enter your email"));
      return;
    }
    setLoading(true);

    const afterSend = () => {
      const startTime = Date.now();
      localStorage.setItem(COUNTDOWN_KEY, COUNTDOWN_DURATION.toString());
      localStorage.setItem(COUNTDOWN_START_KEY, startTime.toString());
      startCountdown(COUNTDOWN_DURATION);
      message.success(t("Send Code Success"));
    };

    const apiPromise: Promise<any> =
      type === "register"
        ? postUserSendEmailCode({
            email: valueInfo.email,
            checkCode: "111111",
          })
        : postUserForgotPassword({
            email: valueInfo.email,
            checkCode: "111111",
          });

    apiPromise
      .then((isOk) => {
        if (isOk) afterSend();
      })
      .finally(() => setLoading(false));
  }, [valueInfo?.email, type, t, startCountdown]);

  return (
    <div style={{ position: "relative", ...style }} className={className}>
      {/* 原有输入或其他控件 */}
      {cloneElement(children as any, restProps)}
      {/* 发送区域 */}
      {countdown > 0 ? (
        <Text
          type="secondary"
          style={{
            position: "absolute",
            right: 12,
            top: 5,
            fontWeight: 500,
          }}
        >
          {`${countdown}s`}
        </Text>
      ) : (
        <Button
          type="link"
          style={{
            position: "absolute",
            right: 12,
            top: 0,
            height: 32,
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
          onClick={sendCode}
          disabled={loading}
        >
          {loading ? <Spin size="small" /> : t("SendCode")}
        </Button>
      )}
    </div>
  );
};
