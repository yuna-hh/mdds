import { commentListData } from "@/types/comment";
import CommentAction from "../editor/CommentAction";
import { authStore } from "@/zustand/authStore";
import { useState } from "react";
import { formatKST } from "@/utils/format/date";
import CommentForm from "../editor/CommentForm";

type CommentProps = {
  data: commentListData;
  postId: string;
};

function CommentList({ data, postId }: CommentProps) {
  const { user } = authStore();
  const [selectId, setSelectId] = useState("");
  const handleEditMode = (id: string) => {
    setSelectId(id);
  };
  const { data: comments } = data;
  return (
    <>
      <ul className="flex flex-col justify-center items-center gap-3">
        {comments.map((comment) =>
          selectId === comment.id ? (
            <CommentForm
              postId={postId}
              key={comment.id}
              comment={comment}
              handleEditMode={handleEditMode}
            />
          ) : (
            <li
              key={comment.id}
              className="w-full px-[10px] sm:px-[16px] py-[8px] sm:py-[12px] border border-main-1 rounded-lg"
            >
              <div className="flex flex-row flex-wrap sm:flex-nowrap items-center mb-[6px]">
                <span className="inline-block font-semibold text-[14px] sm:text-[16px]">
                  {comment.user.name}
                </span>
                <span className="ml-2 text-[12px] sm:text-[14px] text-main-2">
                  {formatKST(comment.created_at)}
                </span>
                {comment.is_edited && (
                  <span className="ml-auto text-[13px] sm:text-[14px] text-main-2">
                    ( 수정됨 )
                  </span>
                )}
              </div>

              <p className="whitespace-pre-wrap break-words">
                {comment.content}
              </p>
              {user?.id === comment.author && (
                <CommentAction
                  postId={comment.post_id}
                  commentId={comment.id}
                  handleEditMode={handleEditMode}
                />
              )}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default CommentList;
