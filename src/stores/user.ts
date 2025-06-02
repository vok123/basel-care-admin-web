import { IGetDoctorGetRes } from "@/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserInfo = IGetDoctorGetRes;

interface UserState {
  permissions: string[];
  userInfo: UserInfo;
  setPermissions: (permissions: string[]) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  clearInfo: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      permissions: ["/chat", "/schedule", "/appointment"],
      userInfo: {
        id: 0,
        username: "",
        email: "",
        phone: "",
      },
      /** 设置用户信息 */
      setPermissions: (permissions) => set({ permissions }),
      /** 设置权限 */
      setUserInfo: (userInfo) => set({ userInfo }),
      /** 清除用户信息 */
      clearInfo: () =>
        set({
          userInfo: {},
        }),
    }),
    {
      enabled: process.env.NODE_ENV === "development",
      name: "userStore",
    },
  ),
);
