"use client";
import { useLogout } from "@/hooks/auth/useLogout";
import { authStore } from "@/zustand/authStore";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = authStore();
  const handleLogout = useLogout();
  return (
    <header className="flex flex-wrap justify-between items-center w-full px-[15px] sm:px-[70px] lg:px-[120px] py-[15px] sm:py-[25px] text-[18px] bg-main-3">
      <Link className="font-bold" href={"/"}>
        물댄동산 지출증빙
      </Link>
      {user && (
        <span className="hidden sm:block">
          {user.user_metadata.display_name}님 환영합니다
        </span>
      )}
      {user ? (
        <div className="flex items-center gap-[25px] text-[15px] sm:text-[16px]">
          <Link href={"/board/write"}>글쓰기</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className="flex gap-10 text-[16px]">
          <Link href={"/login"}>로그인</Link>
          <Link href={"/join"}>회원가입</Link>
        </div>
      )}
      {user && (
        <span className="block sm:hidden w-full mt-[15px] text-center text-[16px]">
          {user.user_metadata.display_name}님 환영합니다
        </span>
      )}
    </header>
  );
};

export default Header;
