import { CommentsResponseType } from "@/types/comment";
import CommentAction from "../editor/CommentAction";
import { authStore } from "@/zustand/authStore";
import { useState } from "react";
import CommentWrite from "../editor/CommentWrite";

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
            <span className="inline-block font-semibold mb-[6px]">
              {comment.user.name}
            </span>
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
