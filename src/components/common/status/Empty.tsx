import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-[100px] text-xl font-bold opacity-60">
      <Image src={"/icon-notice.svg"} width={100} height={100} alt="비어있음" />
      <span>아직 게시된 작성글이 없습니다</span>
    </div>
  );
};

export default Empty;
