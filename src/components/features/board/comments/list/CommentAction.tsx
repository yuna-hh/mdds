import { useDeleteComment } from "@/hooks/board/comment/useDeleteComment";
import { memo, useState } from "react";

type CommentActionProps = {
  postId: string;
  commentId: string;
  handleChangeMode: (id: string) => void;
};

function CommentAction({
  postId,
  commentId,
  handleChangeMode,
}: CommentActionProps) {
  const [mode, setMode] = useState(false);
  const { handleDeleteComment } = useDeleteComment({ postId, commentId });
  const handleChange = (commentId: string) => {
    handleChangeMode(commentId);
    setMode(!mode);
  };
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <button onClick={() => handleChange(commentId)}>
        {mode ? "완료" : "수정"}
      </button>
      {/* mode가 true면 완료 false면 수정 */}
      {/* 수정 눌렀을때 mode가 true로 바뀌어야함 */}
      <button onClick={() => (mode ? setMode(!mode) : handleDeleteComment())}>
        {/* mode가 true면 취소 false면 삭제 */}
        {mode ? "취소" : "삭제"}
      </button>
    </div>
  );
}

export default CommentAction;
