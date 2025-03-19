import Header from "@/components/common/layout/Header";
import React, { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-w-[456px] max-w-[1200px] m-auto">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
