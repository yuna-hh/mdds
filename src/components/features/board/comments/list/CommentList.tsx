"use client";

import Loading from "@/components/common/status/Loading";
import { useGetComments } from "@/hooks/board/post/ comments/useGetComments";
import Comment from "./Comment";

const CommentList = ({ postId }: { postId: string }) => {
  const { data: comments, isPending, isError } = useGetComments(postId);
  if (!comments) return <Loading />;
  if (isPending) return <Loading />;

  return (
    <div className="mt-[25px]">
      <span className="font-bold">댓글 {comments.length || 0}</span>
      {comments.length > 0 && <Comment comments={comments} />}
    </div>
  );
};

export default CommentList;
