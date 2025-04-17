"use client";
import React from "react";
import PostAction from "./PostAction";
import { useGetPost } from "@/hooks/board/post/useGetPost";
import Loading from "@/components/common/status/Loading";
import Image from "next/image";
const PostContent = ({ postId }: { postId: string }) => {
  const { data, isPending, isError } = useGetPost(postId);
  if (!data) return <Loading />;
  if (isPending) return <Loading />;
  const {
    teams: { team },
    title,
    usage_detail,
    price,
    user_list,
    account,
    img_url,
  } = data;
  return (
    <div className="flex flex-col items-center gap-[20px]">
      <div className="w-full px-[18px] py-[13px] font-bold text-[18px] border border-main-1 bg-main-3 rounded-lg">
        <span className="mr-1">[{team}]</span>
        <span>{title}</span>
      </div>
      {/* <div className="relative w-[418px] h-[400px] border border-main-1 rounded-lg">
        <Image
          src={img_url}
          fill
          alt="첨부된 이미지"
          priority
          className="rounded-lg"
        />
      </div> */}
      <div className="relative border border-main-1 rounded-lg aspect-auto">
        <Image
          src={img_url}
          alt="첨부된 이미지"
          priority
          className="rounded-lg object-cover"
          width={418}
          height={0}
        />
      </div>
      <div className="w-full p-[13px] border border-main-1 rounded-lg">
        <ul className="mt-[17px] ml-[18px] list-disc list-inside space-y-2">
          <li>사용항목 : {usage_detail}</li>
          <li>청구금액: {price}원</li>
          <li>명단 / 인원수 : {user_list}</li>
          <li>입금계좌: {account}</li>
        </ul>
        <PostAction postId={postId} />
      </div>
    </div>
  );
};

export default PostContent;
