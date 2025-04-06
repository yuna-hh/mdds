import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src={"/icon-loading.svg"} width={200} height={200} alt="로딩중" />
    </div>
  );
};

export default Loading;
