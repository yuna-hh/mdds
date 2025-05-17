import { useDeletePost } from "@/hooks/board/post/useDeletePost";
import Link from "next/link";
import React from "react";

const PostAction = ({ postId }: { postId: string }) => {
  const { handleDeletePost } = useDeletePost(postId);
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <Link href={`/board/edit/${postId}`}>수정</Link>
      <button onClick={handleDeletePost}>삭제</button>
    </div>
  );
};

export default PostAction;
