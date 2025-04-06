import PostPage from "@/components/features/board/posts/detail/PostPage";
import React from "react";

const PostDetailPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  return <PostPage postId={postId} />;
};

export default PostDetailPage;
