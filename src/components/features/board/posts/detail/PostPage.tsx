import CommentList from "../../comments/list/CommentList";
import PostContent from "./PostContent";

const PostPage = ({ postId }: { postId: string }) => {
  return (
    <div className="mt-[73px]">
      <PostContent postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostPage;
