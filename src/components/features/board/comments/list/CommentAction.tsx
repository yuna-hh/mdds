import { useDeleteComment } from "@/hooks/board/comment/useDeleteComment";
import { memo } from "react";

type CommentActionProps = {
  postId: string;
  commentId: string;
};

function CommentAction({ postId, commentId }: CommentActionProps) {
  const { handleDeleteComment } = useDeleteComment({ postId, commentId });
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <button>수정</button>
      <button onClick={handleDeleteComment}>삭제</button>
    </div>
  );
}

export default memo(CommentAction);
