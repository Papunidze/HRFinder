import PageLayout from "@/layout/pageLayout";
import CreateUser from "@/modules/create-user/form/create-user-form";

import React from "react";

const UserForm: React.FC = () => {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">User Information Form</h2>
      <CreateUser />
    </PageLayout>
  );
};

export default UserForm;
