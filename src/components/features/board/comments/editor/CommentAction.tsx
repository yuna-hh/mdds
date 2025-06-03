import { useDeleteComment } from "@/hooks/board/comment/useDeleteComment";

type CommentActionProps = {
  postId: string;
  commentId: string;
  handleEditMode?: (id: string) => void;
};

function CommentAction({
  postId,
  commentId,
  handleEditMode: handleEditMode,
}: CommentActionProps) {
  const { handleDeleteComment } = useDeleteComment({ postId, commentId });
  const handleChange = (commentId: string) => {
    handleEditMode?.(commentId);
  };
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <button onClick={() => handleChange(commentId)}>수정</button>
      <button onClick={() => handleDeleteComment()}>삭제</button>
    </div>
  );
}

export default CommentAction;
