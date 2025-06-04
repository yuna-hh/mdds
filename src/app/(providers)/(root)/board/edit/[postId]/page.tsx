import PostEditor from "@/components/features/board/posts/editor/PostEditor";
import { PostParamsType } from "@/types/post";
import React from "react";

const PostEditPage = async ({ params }: PostParamsType) => {
  const { postId } = await params;
  return <PostEditor postId={postId} isEdit={true} />;
};

export default PostEditPage;
