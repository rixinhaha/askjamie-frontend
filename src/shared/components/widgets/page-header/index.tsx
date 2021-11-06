import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/redux";
import { updateUser, User } from "src/redux/slices/userSlice";
import s from "./s.module.scss";
import WidgetUserAvatar from "../user-avatar";
import WidgetPageNavDrawer from "../page-nav-drawer";
import { signInWithGoogle, signOut } from "../../../../firebase/auth";

const { Header } = Layout;

const datetimeOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

const defaultUser: User = {
  uid: undefined,
  name: undefined,
  role: undefined,
  avatar: undefined,
};

const WidgetPageHeader: React.FC<{}> = () => {
  const {
    uid,
    name,
    role,
    avatar,
    email,
  } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const [time, setTime] = useState<string>(
    new Date().toLocaleDateString("en-US", datetimeOptions),
  );

  const handleLogout = async () => {
    await signOut();
    dispatch(updateUser(defaultUser));
  };

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    dispatch(updateUser({
      uid: user?.uid,
      name: user?.name,
      role: user?.role,
      avatar: user?.avatar,
      email: user?.email,
    }));
  };

  useEffect(() => {
    const addedTimer = setInterval(() => {
      setTime(new Date().toLocaleDateString("en-US", datetimeOptions));
    }, 1000);

    return () => {
      clearInterval(addedTimer);
    };
  }, []);

  return (
    <Header className={s.header}>
      <div className={s.headerWrapper}>
        <WidgetPageNavDrawer />
        <h1 className={s.headerTitle}>Ask Jamie</h1>
        <h3 className={s.headerTime}>{time}</h3>
        <WidgetUserAvatar
          isLoggedIn={uid !== undefined}
          onLogin={handleLogin}
          onLogout={handleLogout}
          name={name}
          uid={uid}
          email={email}
          avatar={avatar}
        />
      </div>
    </Header>
  );
};

export default WidgetPageHeader;
