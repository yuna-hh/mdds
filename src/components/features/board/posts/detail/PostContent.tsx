"use client";
import React from "react";
import PostAction from "./PostAction";
import { useGetPost } from "@/hooks/board/post/useGetPost";
import Loading from "@/components/common/status/Loading";
const PostContent = ({ postId }: { postId: string }) => {
  const { data, isPending, isError } = useGetPost(postId);
  if (!data) return <Loading />;
  if (isPending) return <Loading />;
  const { teams, title, usage_detail, price, user_list, account } = data[0];
  return (
    <div>
      <div className="w-full mb-[12px] px-[18px] py-[13px] font-bold text-[18px] border border-main-1 bg-main-3 rounded-lg">
        <span className="mr-1">[{teams.team}]</span>
        <span>{title}</span>
      </div>
      <div className="p-[13px] border border-main-1 rounded-lg">
        <ul className="mt-[17px] ml-[18px] list-disc list-inside space-y-2">
          <li>사용항목 : {usage_detail}</li>
          <li>청구금액: {price}원</li>
          <li>명단 / 인원수 : {user_list}</li>
          <li>입금계좌: {account}</li>
        </ul>
        <PostAction />
      </div>
    </div>
  );
};

export default PostContent;
