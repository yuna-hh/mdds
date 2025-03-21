import React, { PropsWithChildren } from "react";

const AuthPage = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className="max-w-[456px] w-full m-auto">{children}</div>;
};

export default AuthPage;
