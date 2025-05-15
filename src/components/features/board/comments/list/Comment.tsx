import { CommentsResponseType } from "@/types/post";
import CommentAction from "./CommentAction";

function Comment({ comments }: { comments: CommentsResponseType[] }) {
  return (
    <ul className="mt-3 flex-col justify-center items-center gap-3">
      {comments.map((comment) => (
        <li key={comment.id}>
          <span>{comment.author?.name}</span>
          <p>{comment.content}</p>
          <CommentAction commentId={comment.id} />
        </li>
      ))}
    </ul>
  );
}

export default Comment;
