"use client";

import Loading from "@/components/common/status/Loading";
import { useGetComments } from "@/hooks/board/post/ comments/useGetComments";
import Comment from "./Comment";
import Empty from "@/components/common/status/Empty";

const CommentList = ({ postId }: { postId: string }) => {
  const { data: comments, isPending, isError } = useGetComments(postId);
  if (!comments) return <Loading />;
  if (isPending) return <Loading />;

  return (
    <div className="w-full mt-[25px] mb-[50px]">
      <span className="font-bold">댓글 {comments.length}</span>
      {comments.length > 0 ? (
        <Comment comments={comments} />
      ) : (
        <Empty content="댓글" />
      )}
    </div>
  );
};

export default CommentList;
