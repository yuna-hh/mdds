import { CommentsResponseType } from "@/types/post";
import CommentAction from "./CommentAction";

function Comment({ comments }: { comments: CommentsResponseType[] }) {
  return (
    <ul className="flex flex-col justify-center items-center gap-3 mt-3">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="w-full px-[16px] py-[12px] border border-main-1 rounded-lg"
        >
          <span className="inline-block font-semibold mb-[6px]">
            {comment.author?.name}
          </span>
          <p>{comment.content}</p>
          <CommentAction commentId={comment.id} />
        </li>
      ))}
    </ul>
  );
}

export default Comment;
