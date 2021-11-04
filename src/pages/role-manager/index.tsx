import React from "react";
import QuestionForm from "./question-form";

const RoleManager: React.FC<{}> = () => {
  return (
    <div>
      <QuestionForm />
      <div>Table to see existing questions</div>
      <div>Modal to edit questions</div>
    </div>

  );
};

export default RoleManager;
