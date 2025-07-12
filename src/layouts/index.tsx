import { useToken } from "@/hooks/useToken";
import { useCallback, useEffect, useState } from "react";
import { useOutlet } from "react-router-dom";
import { Skeleton, message } from "antd";
import { Icon } from "@iconify/react";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";
import { versionCheck } from "./utils/helper";
import { useMenuStore, useUserStore } from "@/stores";
import { useCommonStore } from "@/hooks/useCommonStore";
import KeepAlive from "react-activation";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Forbidden from "@/pages/403";
import styles from "./index.module.less";
import { getDoctorGet } from "@/api";

function Layout() {
  const [getToken] = useToken();
  const { pathname, search } = useLocation();
  const uri = pathname + search;
  const token = getToken();
  const outlet = useOutlet();
  const [isLoading, setLoading] = useState(true);
  const [isContentVisible, setContentVisible] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const { setPermissions, setUserInfo } = useUserStore((state) => state);
  const { toggleCollapsed, togglePhone } = useMenuStore((state) => state);
  const { startPolling, stopPolling, requestNotificationPermission } =
    useChatStore();

  const { permissions, userId, isMaximize, isCollapsed, isPhone, isRefresh } =
    useCommonStore();

  /** 获取用户信息和权限 */
  const getUserInfo = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getDoctorGet();
      setUserInfo(user);
      startPolling();
      requestNotificationPermission();
    } catch (err) {
      console.error("获取用户数据失败:", err);
      setPermissions([]);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 当用户信息缓存不存在时则重新获取
    if (token && !userId) {
      getUserInfo();
    }
  }, [getUserInfo, token, userId]);

  useEffect(() => {
    return () => {
      stopPolling();
    };
  }, [stopPolling]);

  // 监测是否需要刷新
  useEffect(() => {
    versionCheck(messageApi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /** 判断是否是手机端 */
  const handleIsPhone = debounce(() => {
    const isPhone = window.innerWidth <= 768;
    // 手机首次进来收缩菜单
    if (isPhone) toggleCollapsed(true);
    togglePhone(isPhone);
  }, 500);

  // 监听是否是手机端
  useEffect(() => {
    handleIsPhone();
    window.addEventListener("resize", handleIsPhone);

    return () => {
      window.removeEventListener("resize", handleIsPhone);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** 更新内容可视状态 */
  const handleChangeContentVisible = (state: boolean) => {
    setContentVisible(state);
  };

  return (
    <div id="layout">
      {contextHolder}
      <Menu changeContentVisible={handleChangeContentVisible} />
      <div className={styles.layout_right}>
        <div
          id="header"
          className={`
            border-bottom
            transition-all
            ${styles.header}
            ${isCollapsed ? styles["header-close-menu"] : ""}
            ${isMaximize ? styles["header-none"] : ""}
            ${isPhone ? `!left-0 z-999` : ""}
          `}
        >
          <Header />
          <Tabs />
        </div>
        <div
          id="layout-content"
          className={`
            overflow-auto
            transition-all
            ${styles.con}
            ${isMaximize ? styles["con-maximize"] : ""}
            ${isCollapsed ? styles["con-close-menu"] : ""}
            ${isPhone ? `!left-0 !w-full` : ""}
          `}
        >
          {isLoading && permissions.length === 0 && (
            <Skeleton active className="p-30px" paragraph={{ rows: 10 }} />
          )}
          {!isLoading && permissions.length === 0 && <Forbidden />}
          {isRefresh && (
            <div
              className={`
              absolute
              left-50%
              top-50%
              -rotate-x-50%
              -rotate-y-50%
            `}
            >
              <Icon
                className="text-40px animate-spin"
                icon="ri:loader-2-fill"
              />
            </div>
          )}
          {permissions.length > 0 && (
            <KeepAlive id={uri} name={uri}>
              <div
                className={`
                  content-transition
                  h-full
                  ${isContentVisible ? "content-visible" : "content-hidden"}
                `}
              >
                {outlet}
              </div>
            </KeepAlive>
          )}
          {permissions.length > 0 &&
            !isContentVisible &&
            !["production", "test"].includes(String(process.env.NODE_ENV)) && (
              <Skeleton
                active
                className={`
                p-30px
                absolute
                content-transition
                z-0
                top-0
                content-visible
              `}
                paragraph={{ rows: 10 }}
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
