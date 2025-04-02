"use client";
import { getUserInfo } from "@/service/auth";
import { authStore } from "@/zustand/authStore";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  const { saveUser } = authStore();

  useEffect(() => {
    if (userInfo) {
      saveUser(userInfo);
    }
  }, [saveUser, userInfo]);
  return <div>{children}</div>;
};

export default AuthProvider;
