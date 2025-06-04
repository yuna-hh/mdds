import Image from "next/image";
import React from "react";

type EmptyProps = {
  content: string;
};

const Empty = ({ content }: EmptyProps) => {
  return (
    <div className="flex flex-col items-center gap-5 my-[100px] text-[16px] sm:text-xl font-bold opacity-60">
      <Image src={"/icon-notice.svg"} width={80} height={80} alt="비어있음" />
      <span>아직 게시된 {content}이 없습니다</span>
    </div>
  );
};

export default Empty;
