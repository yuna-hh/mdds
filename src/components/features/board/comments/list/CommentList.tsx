import { CommentsResponseType } from "@/types/comment";
import CommentAction from "../editor/CommentAction";
import { authStore } from "@/zustand/authStore";
import { useState } from "react";
import CommentWrite from "../editor/CommentWrite";
import { formatKST } from "@/utils/format/date";

type CommentProps = {
  comments: CommentsResponseType[];
  postId: string;
};

function CommentList({ comments, postId }: CommentProps) {
  const { user } = authStore();
  const [selectId, setSelectId] = useState("");
  const handleChangeMode = (id: string) => {
    setSelectId(id);
  };
  return (
    <ul className="flex flex-col justify-center items-center gap-3">
      {comments.map((comment) =>
        selectId === comment.id ? (
          <CommentWrite
            postId={postId}
            key={comment.id}
            comment={comment}
            handleChangeMode={handleChangeMode}
          />
        ) : (
          <li
            key={comment.id}
            className="w-full px-[16px] py-[12px] border border-main-1 rounded-lg"
          >
            <div className="flex flex-row items-center mb-[6px]">
              <span className="inline-block font-semibold ">
                {comment.user.name}
              </span>
              <span className="ml-2 text-[14px] text-main-2">
                {formatKST(comment.created_at)}
              </span>
              {comment.is_edited && (
                <span className="ml-auto text-[14px] text-main-2">
                  ( 수정됨 )
                </span>
              )}
            </div>
            <p>{comment.content}</p>
            {user?.id === comment.author && (
              <CommentAction
                postId={comment.post_id}
                commentId={comment.id}
                handleChangeMode={handleChangeMode}
              />
            )}
          </li>
        )
      )}
    </ul>
  );
}

export default CommentList;
