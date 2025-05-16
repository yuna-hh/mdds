import { memo } from "react";

function CommentAction({ commentId }: { commentId: string }) {
  return (
    <div className="flex justify-end gap-[14px] mt-[22px] font-bold">
      <button>수정</button>
      <button>삭제</button>
    </div>
    // <ul className="flex items-center font-bold gap-[14px]">
    //   <li>
    //     <button>수정</button>
    //   </li>
    //   <li>
    //     <button>삭제</button>
    //   </li>
    // </ul>
  );
}

export default memo(CommentAction);
