import CommentSkeleton from "@/components/common/status/skeleton/CommentSkeleton";
import CommentSection from "../../comments/list/CommentSection";
import PostContent from "./PostContent";
import Button from "@/components/common/form/Button";

const PostPage = ({ postId }: { postId: string }) => {
  return (
    <div className="flex flex-col items-center mt-[73px]">
      <PostContent postId={postId} />
      <CommentSection postId={postId} />
      <Button href="/" content="목록으로 이동" />
    </div>
  );
};

export default PostPage;
