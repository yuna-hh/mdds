import React from "react";

const PostAction = ({ postId }: { postId: string }) => {
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <span>수정</span>
      <button>삭제</button>
    </div>
  );
};

export default PostAction;
