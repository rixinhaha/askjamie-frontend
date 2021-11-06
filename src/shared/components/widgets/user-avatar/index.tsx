/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState, useMemo } from "react";
import { Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./s.module.scss";

interface WidgetUserAvatarProps {
  isLoggedIn: boolean;
  name?: string;
  email?: string;
  avatar?: string;
  uid?: string;
  onLogout?: () => void;
  onAvatarClick?: (e: any) => void;
  onLogin?: ()=> void;
}

// logged in

const WidgetUserAvatar: React.FC<WidgetUserAvatarProps> = (props) => {
  const {
    isLoggedIn, onLogout, onAvatarClick, onLogin, name, email, avatar,
  } = props;

  const handleAvatarClick = (e: any) => {
    if (onAvatarClick) {
      onAvatarClick(e);
    }
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleLoginClick = () => {
    if (onLogin) {
      onLogin();
    }
  };

  const popupTitle = (
    <div className={style.popupTitleWrapper}>
      <div className={style.popupAvatarWrapper} onClick={handleAvatarClick}>
        <Avatar
          src={<img alt="avatar" src={avatar ?? ""} />}
          icon={<UserOutlined />}
          size={32}
        />
      </div>
      <div>
        <div className={style.popupTitleName}>{name}</div>
        <div className={style.popupTitleEmail}>{email}</div>
      </div>
    </div>
  );

  const popoverContent = (
    <Button
      type="link"
      className={style.logoutButton}
      onClick={handleLogoutClick}
    >
      Sign Out
    </Button>
  );

  if (!isLoggedIn) {
    return (
      <div>
        <Button
          type="primary"
          shape="round"
          onClick={handleLoginClick}
        >
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Popover
        title={popupTitle}
        placement="bottomLeft"
        content={popoverContent}
        trigger="click"
      >
        <Avatar
          className={style.userAvatarCircle}
          size={32}
          icon={<UserOutlined />}
          src={<img alt="avatar" src={avatar ?? ""} />}
        />
      </Popover>
    </div>
  );
};

export default WidgetUserAvatar;
