import PostEditor from "@/components/features/board/posts/editor/PostEditor";
import React from "react";

const PostEditPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  return <PostEditor postId={postId} isEdit={true} />;
};

export default PostEditPage;
