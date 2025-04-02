"use client";
import { authStore } from "@/zustand/authStore";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = authStore();
  return (
    <header className="flex justify-between w-full px-[120px] py-[25px] text-[18px] bg-main-3">
      <Link className="font-bold" href={"/"}>
        물댄동산 지출증빙
      </Link>
      {user && <span>{user?.user_metadata.display_name}님 환영합니다</span>}
      {user ? (
        <div className="flex gap-[25px]">
          <Link href={"/"}>글쓰기</Link>
          <Link href={"/"}>로그아웃</Link>
        </div>
      ) : (
        <div className="flex gap-10">
          <Link href={"/login"}>로그인</Link>
          <Link href={"/join"}>회원가입</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
