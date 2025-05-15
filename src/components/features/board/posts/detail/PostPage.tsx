import CommentList from "../../comments/list/CommentList";
import PostContent from "./PostContent";
import Button from "@/components/common/form/Button";

const PostPage = ({ postId }: { postId: string }) => {
  return (
    <div className="flex flex-col items-center mt-[73px]">
      <PostContent postId={postId} />
      <CommentList postId={postId} />
      <Button href="/" content="목록으로 이동" />
    </div>
  );
};

export default PostPage;
