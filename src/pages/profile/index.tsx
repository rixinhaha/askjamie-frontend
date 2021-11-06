import { Button } from "antd";
import React from "react";
import { updateUserRole } from "src/firebase/permission";
import { PermissionRole } from "src/shared/constants";

const Profile: React.FC<{}> = () => {
  const handleClick = () => {
    updateUserRole("test", PermissionRole.MEMBER);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        test
      </Button>
    </div>
  );
};

export default Profile;
