import type { FormProps } from "antd";
import { message as aMessage } from "antd";
import { Form, Button, Input } from "antd";
import { setTitle } from "@/utils/helper";
import Logo from "@/assets/images/logo.svg";
import { SendCodeWrapper } from "@/components/complex/SendCode";
import { IPostDoctorRegisterReq, postDoctorRegister } from "@/api";
import { encryptMd5 } from "@south/utils";

function Register() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm<IPostDoctorRegisterReq>();
  const [isLoading, setLoading] = useState(false);
  const [message, contextHolder] = aMessage.useMessage();
  const themeCache = (localStorage.getItem(THEME_KEY) || "light") as ThemeType;
  const email = Form.useWatch("email", form);

  // 语言切换修改title
  useEffect(() => {
    setTitle(t, t("register.register"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);
  /**
   * 处理登录
   * @param values - 表单数据
   */
  const handleFinish: FormProps["onFinish"] = async (
    values: IPostDoctorRegisterReq,
  ) => {
    try {
      setLoading(true);
      const params: IPostDoctorRegisterReq = {
        ...values,
        password: encryptMd5(values.password!),
        username: values.email,
        phone: "+6512345678",
      };
      await postDoctorRegister(params);
      message.success(t("register.registerSuccess"));
      navigate("/login?email=" + values.email);
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
          w-390px
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
              {t("register.title")}
            </span>
          </div>
          <Form
            form={form}
            layout="vertical"
            name="horizontal_login"
            autoComplete="off"
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            initialValues={{
              email: "512855971@qq.com",
              password: "123123",
            }}
          >
            <Form.Item
              name="firstName"
              label={t("register.firstName")}
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("register.firstName"),
                  }),
                },
              ]}
            >
              <Input
                allow-clear="true"
                placeholder={t("public.pleaseEnter", {
                  name: t("register.firstName"),
                })}
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={t("register.lastName")}
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("register.lastName"),
                  }),
                },
              ]}
            >
              <Input
                allow-clear="true"
                placeholder={t("public.pleaseEnter", {
                  name: t("register.lastName"),
                })}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label={t("register.email")}
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("register.email"),
                  }),
                },
              ]}
            >
              <Input
                allow-clear="true"
                placeholder={t("public.pleaseEnter", {
                  name: t("register.email"),
                })}
              />
            </Form.Item>
            <Form.Item
              label={t("register.emailCode")}
              className="!mb-15px relative"
              name="code"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("register.code"),
                  }),
                },
              ]}
            >
              <SendCodeWrapper valueInfo={{ email }} type="register">
                <Input
                  allow-clear="true"
                  name="emailCode"
                  placeholder={t("public.pleaseEnter", {
                    name: t("register.code"),
                  })}
                />
              </SendCodeWrapper>
            </Form.Item>
            <Form.Item
              name="password"
              label={t("register.password")}
              className="!mb-15px"
              rules={[
                {
                  required: true,
                  message: t("public.pleaseEnter", {
                    name: t("register.password"),
                  }),
                },
                PASSWORD_RULE(t),
              ]}
            >
              <Input.Password
                placeholder={t("public.pleaseEnter", {
                  name: t("register.password"),
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
              {t("register.register")}
            </Button>
          </Form>
          <div
            className="text-blue-500 cursor-pointer text-center mb-4"
            onClick={() => {
              navigate("/login");
            }}
          >
            {t("register.toLogin")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
