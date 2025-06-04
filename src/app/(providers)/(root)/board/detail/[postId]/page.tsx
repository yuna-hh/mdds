import PostPage from "@/components/features/board/posts/detail/PostPage";
import { PostParamsType } from "@/types/post";
import React from "react";

const PostDetailPage = async ({ params }: PostParamsType) => {
  const { postId } = await params;
  return <PostPage postId={postId} />;
};

export default PostDetailPage;
