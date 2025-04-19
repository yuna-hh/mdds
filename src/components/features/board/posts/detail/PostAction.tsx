import { useDeletePost } from "@/hooks/board/post/useDeletePost";
import React from "react";

const PostAction = ({ postId }: { postId: string }) => {
  const { handleDeletePost } = useDeletePost(postId);
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <span>수정</span>
      <button className="cursor-pointer" onClick={handleDeletePost}>
        삭제
      </button>
    </div>
  );
};

export default PostAction;
