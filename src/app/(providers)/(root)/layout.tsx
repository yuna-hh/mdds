import Header from "@/components/common/layout/Header";
import React, { PropsWithChildren } from "react";
import AuthProvider from "../_providers/AuthProvider";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Header />
      <div className="flex flex-col min-w-[360px] max-w-[1200px] m-auto">
        {children}
      </div>
    </AuthProvider>
  );
};

export default PageLayout;
