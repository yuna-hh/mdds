"use client";

import Loading from "@/components/common/status/Loading";
import { useGetComment } from "@/hooks/board/comment/useGetComment";
import Empty from "@/components/common/status/Empty";
import CommentList from "./CommentList";
import CommentForm from "../editor/CommentForm";
import CommentSkeleton from "@/components/common/status/skeleton/CommentSkeleton";
import usePagination from "@/hooks/common/usePagination";

const CommentSection = ({ postId }: { postId: string }) => {
  const { page, limit, onPageChange, currentPage } = usePagination();
  const { data, isPending } = useGetComment(postId, page, limit);

  if (!data) return <Loading />;
  if (isPending) return <CommentSkeleton />;

  const { count, data: comments } = data;

  console.log(comments);
  return (
    <div className="flex flex-col gap-3 w-full mt-[25px] mb-[50px]">
      <span className="font-bold">댓글 {comments.length}</span>
      {comments.length > 0 ? (
        <CommentList comments={comments} postId={postId} />
      ) : (
        <Empty content="댓글" />
      )}
      <CommentForm postId={postId} />
    </div>
  );
};

export default CommentSection;
