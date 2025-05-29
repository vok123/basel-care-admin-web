import type { LoginData } from "./model";
import type { FormProps } from "antd";
import { Checkbox, message } from "antd";
import { Form, Button, Input } from "antd";
import { setTitle } from "@/utils/helper";
import { encryption, decryption } from "@south/utils";
import Logo from "@/assets/images/logo.svg";
import { postUserLogin } from "@/api";

const CHECK_REMEMBER = "remember-me";
const USER_USERNAME = "login-username";
const USER_PASSWORD = "login-password";

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [getToken, setToken] = useToken();
  const [isLoading, setLoading] = useState(false);
  const [isRemember, setRemember] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const { search } = useLocation();
  const searchParams = useSearchParams();
  const setThemeValue = usePublicStore((state) => state.setThemeValue);
  const themeCache = (localStorage.getItem(THEME_KEY) || "light") as ThemeType;

  useEffect(() => {
    if (!themeCache) {
      localStorage.setItem(THEME_KEY, "light");
    }
    if (themeCache === "dark") {
      document.body.className = "theme-dark";
    }
    setThemeValue(themeCache === "dark" ? "dark" : "light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeCache]);

  useEffect(() => {
    // 如果存在token，则直接进入页面
    if (getToken()) {
      handleGoMenu();
    }

    // 如果存在记住我缓存
    const remember = localStorage.getItem(CHECK_REMEMBER);
    setRemember(remember !== "false");

    // 如果存在账号密码缓存，则自动填充
    const username = localStorage.getItem(USER_USERNAME);
    const password = localStorage.getItem(USER_PASSWORD);
    if (username && password) {
      const newPassword = decryption(password);
      form.setFieldsValue({ username, password: newPassword.value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 语言切换修改title
  useEffect(() => {
    setTitle(t, t("login.login"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  /** 菜单跳转 */
  const handleGoMenu = async () => {
    const url = searchParams[0].get("redirect");
    if (url) {
      navigate(url);
    }
  };

  /**
   * 处理登录
   * @param values - 表单数据
   */
  const handleFinish: FormProps["onFinish"] = async (values: LoginData) => {
    try {
      setLoading(true);
      const { token } = await postUserLogin(values);

      // 处理记住我逻辑
      const passwordObj = { value: values.password, expire: 0 };
      handleRemember(values.username, encryption(passwordObj));

      if (!token) {
        return messageApi.error({
          content: t("login.notPermissions"),
          key: "permissions",
        });
      }

      setToken(token);

      navigate("/chat");
    } finally {
      setLoading(false);
    }
  };

  /**
   * 处理失败
   * @param errors - 错误信息
   */
  const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
    console.error("错误信息:", errors);
  };

  /** 点击记住我 */
  const onRemember = () => {
    setRemember(!isRemember);
    localStorage.setItem(CHECK_REMEMBER, isRemember ? "false" : "true");
  };

  /**
   * 记住我逻辑
   */
  const handleRemember = (username: string, password: string) => {
    if (isRemember) {
      localStorage.setItem(USER_USERNAME, username);
      localStorage.setItem(USER_PASSWORD, password);
    } else {
      localStorage.removeItem(USER_USERNAME);
      localStorage.removeItem(USER_PASSWORD);
    }
  };

  /** 点击忘记密码 */
  const onForgetPassword = () => {
    navigate(`/forget${search}`);
  };

  const onRegister = () => {
    navigate(`/register${search}`);
  };

  return (
    <>
      {contextHolder}
      <div
        className={`
        ${themeCache === "dark" ? "bg-black text-white" : "bg-light-400"}
        w-screen
        h-screen
        relative
      `}
      >
        <div className="flex absolute top-5 right-5">
          <I18n />
          <Theme />
        </div>
        <div
          className={`
          ${themeCache === "dark" ? "bg-black bg-dark-200" : "bg-white"}
          w-340px
          p-1.8rem
          rounded-10px
          box-border
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          shadow-[2px_5px_20px_rgba(0,0,0,0.1)]
        `}
        >
          <div className="pb-20px pt-10px flex items-center justify-center">
            <img
              className="mr-2 object-contain"
              width="32"
              height="32"
              src={Logo}
              alt="LOGO"
            />
            <span className="text-22px font-bold tracking-2px">
              {t("login.systemLogin")}
            </span>
          </div>
          <Form
            form={form}
            layout="vertical"
            name="horizontal_login"
            autoComplete="on"
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            initialValues={{
              username: "admin",
              password: "admin123456",
            }}
          >
            <div className="text-#AAA6A6 text-14px mb-8px">
              {t("login.username")}
            </div>

            <Form.Item
              name="username"
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("login.username"),
                  }),
                },
              ]}
            >
              <Input
                allow-clear="true"
                placeholder={t("public.pleaseEnter", {
                  name: t("login.username"),
                })}
                autoComplete="username"
              />
            </Form.Item>

            <div className="text-#AAA6A6 text-14px mb-8px">
              {t("login.password")}
            </div>

            <Form.Item
              name="password"
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("login.password"),
                  }),
                },
              ]}
            >
              <Input.Password
                placeholder={t("public.pleaseEnter", {
                  name: t("login.password"),
                })}
                autoComplete="current-password"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-15px mb-25px rounded-5px tracking-2px"
              loading={isLoading}
            >
              {t("login.login")}
            </Button>
          </Form>

          <div
            className="text-blue-500 cursor-pointer text-center mb-4"
            onClick={onRegister}
          >
            {t("login.registerNew")}
          </div>

          <div className="flex justify-between items-center mb-5px px-1px">
            <Checkbox checked={isRemember} onChange={onRemember}>
              {t("login.rememberMe")}
            </Checkbox>

            <div
              className="text-blue-500 cursor-pointer"
              onClick={onForgetPassword}
            >
              {t("login.forgetPassword")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
