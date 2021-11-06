import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux";

const Permission: React.FC<{}> = ({ children }) => {
  const {
    uid,
    role,
    email,
  } = useSelector((state: RootState) => state.user);

  if (uid) {
    return (
      <div>
        <p>
          Current User:
          {email}
        </p>
        {children}
      </div>
    );
  }

  return <div>Not Logged In</div>;
};

export default Permission;
