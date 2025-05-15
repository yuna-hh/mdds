"use client";
import PostWriteForm from "./PostForm";
import { useGetCategory } from "@/hooks/board/post/useGetCategory";
import Loading from "@/components/common/status/Loading";
import { authStore } from "@/zustand/authStore";
import { useGetPost } from "@/hooks/board/post/useGetPost";

type PostWriteType = {
  postId?: string;
  isEdit?: boolean;
};

const PostEditor = ({ postId, isEdit }: PostWriteType) => {
  const { data: categoryData } = useGetCategory();
  const { user } = authStore();
  const { data: prevPostData } = useGetPost(postId);

  if (!categoryData) return <Loading />;

  return (
    <PostWriteForm
      categoryData={categoryData}
      user={user}
      postId={postId}
      isEdit={isEdit}
      prevPostData={prevPostData}
    />
  );
};

export default PostEditor;
