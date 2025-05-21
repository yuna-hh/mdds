"use client";

import Loading from "@/components/common/status/Loading";
import { useGetComment } from "@/hooks/board/comment/useGetComment";
import Empty from "@/components/common/status/Empty";
import CommentWrite from "../editor/CommentWrite";
import CommentList from "./CommentList";

const CommentSection = ({ postId }: { postId: string }) => {
  const { data: comments, isPending } = useGetComment(postId);
  if (!comments) return <Loading />;
  if (isPending) return <Loading />;

  return (
    <div className="flex flex-col gap-3 w-full mt-[25px] mb-[50px]">
      <span className="font-bold">댓글 {comments.length}</span>
      {comments.length > 0 ? (
        <CommentList comments={comments} postId={postId} />
      ) : (
        <Empty content="댓글" />
      )}
      <CommentWrite postId={postId} />
    </div>
  );
};

export default CommentSection;
