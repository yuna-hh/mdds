"use client";
import Notiflix from "notiflix";
import React, { useEffect } from "react";

const NotiflixProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    Notiflix.Notify.init({
      position: "right-top",
      distance: "20px",
      timeout: 1500,
      fontFamily: "Pretendard",
    });
    Notiflix.Confirm.init({
      fontFamily: "Pretendard",
      titleColor: "#5b79c7",
      okButtonBackground: "#5b79c7",
      borderRadius: "8px",
    });
  }, []);
  return <>{children}</>;
};

export default NotiflixProvider;
