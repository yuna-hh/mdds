import { memo } from "react";

function CommentAction({ commentId }: { commentId: string }) {
  return (
    <ul className="flex justify-center items-center font-bold gap-[14px]">
      <li>
        <button>수정</button>
      </li>
      <li>
        <button>삭제</button>
      </li>
    </ul>
  );
}

export default memo(CommentAction);
