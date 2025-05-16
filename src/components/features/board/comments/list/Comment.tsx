import { CommentsResponseType } from "@/types/post";
import CommentAction from "./CommentAction";
import { authStore } from "@/zustand/authStore";

function Comment({ comments }: { comments: CommentsResponseType[] }) {
  const { user } = authStore();
  return (
    <ul className="flex flex-col justify-center items-center gap-3 mt-3">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="w-full px-[16px] py-[12px] border border-main-1 rounded-lg"
        >
          <span className="inline-block font-semibold mb-[6px]">
            {comment.user.name}
          </span>
          <p>{comment.content}</p>
          {user?.id === comment.author && (
            <CommentAction commentId={comment.id} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Comment;
