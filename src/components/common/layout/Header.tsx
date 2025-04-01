import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full px-[120px] py-[25px] font-bold text-[20px] bg-main-3">
      <Link href={"/"}>물댄동산 지출증빙</Link>
    </div>
  );
};

export default Header;
