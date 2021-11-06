import React from "react";
import {
  HomeOutlined, SettingOutlined, UserOutlined, RobotOutlined,
} from "@ant-design/icons";

// exported config object
export default {
  sidebar: [
    {
      type: "page",
      title: "Home",
      path: "/",
      component: React.lazy(() => import("./pages/home")),
      icon: <HomeOutlined />,
    },
    {
      type: "page",
      path: "/profile",
      title: "Profile",
      component: React.lazy(() => import("./pages/profile")),
      icon: <UserOutlined />,
    },
    {
      type: "page",
      path: "/setting",
      title: "Setting",
      component: React.lazy(() => import("./pages/setting")),
      icon: <SettingOutlined />,
    },
    {
      type: "page",
      path: "/role-manager",
      title: "Role Manager",
      component: React.lazy(() => import("./pages/role-manager")),
      permission: true,
      icon: <RobotOutlined />,
    },
    {
      type: "404",
      path: "*",
      component: React.lazy(() => import("./pages/page-404")),
    },
  ],
};
