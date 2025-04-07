"use client";
import Notiflix from "notiflix";
import React, { useEffect } from "react";

const NotiflixProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    Notiflix.Notify.init({
      position: "right-top",
      distance: "75px",
      timeout: 2000,
      fontFamily: "Pretendard",
    });
  }, []);
  return <>{children}</>;
};

export default NotiflixProvider;
