import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full border bg-secondary rounded-lg p-4 mt-24">
      <div className="container mb-2">{children}</div>
    </div>
  );
};

export default PageLayout;
