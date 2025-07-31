"use client";
import React, { useState } from "react";
import PostAction from "./PostAction";
import { useGetPost } from "@/hooks/board/post/useGetPost";
import Loading from "@/components/common/status/Loading";
import Image from "next/image";
import { authStore } from "@/zustand/authStore";
import ImageLightbox from "./ImageLightbox";
const PostContent = ({ postId }: { postId: string }) => {
  const { user } = authStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = useGetPost(postId);
  if (!data) return <Loading />;
  if (isPending) return <Loading />;
  const {
    teams: { team },
    author,
    title,
    usage_detail,
    price,
    user_list,
    account,
    img_url,
  } = data;
  return (
    <div className="flex flex-col items-center gap-[20px] w-full">
      <div className="w-full px-[18px] py-[13px] font-bold text-[18px] border border-main-1 bg-main-3 rounded-lg">
        <span className="mr-1">[{team}]</span>
        <span>{title}</span>
      </div>
      <div className="group relative border border-main-1 rounded-lg aspect-auto">
        {isLoading && <Loading />}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute hidden sm:group-hover:flex justify-center items-center w-full h-full text-white text-2xl font-bold bg-black/5 backdrop-blur-sm rounded-lg"
        >
          <span>이미지 크게 보기</span>
        </div>
        <Image
          src={img_url}
          alt="첨부된 이미지"
          priority
          className={`rounded-lg object-cover ${
            isLoading ? "hidden" : "block"
          }`}
          width={418}
          height={0}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="w-full px-[17px] border border-main-1 rounded-lg">
        <ul className="my-[15px] sm:my-[30px] break-words space-y-2 list-header">
          <li>사용항목 : {usage_detail}</li>
          <li>청구금액: {price.toLocaleString()}원</li>
          <li>명단 / 인원수 : {user_list}</li>
          <li>입금계좌: {account}</li>
        </ul>
        {user?.id === author && <PostAction postId={postId} />}
      </div>
      {isOpen && <ImageLightbox img_url={img_url} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default PostContent;
