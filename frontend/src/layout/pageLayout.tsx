import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full border bg-secondary rounded-lg  p-2 md:p-6   mx-3 md:mx-0 mt-24">
      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
