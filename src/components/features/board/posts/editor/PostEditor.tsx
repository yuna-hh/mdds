"use client";
import PostWriteForm from "./PostForm";
import { useGetCategory } from "@/hooks/board/post/useGetCategory";
import Loading from "@/components/common/status/Loading";
import { authStore } from "@/zustand/authStore";
import { useGetPost } from "@/hooks/board/post/useGetPost";
import { Notify } from "notiflix";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PostWriteType = {
  postId?: string;
  isEdit?: boolean;
};

const PostEditor = ({ postId, isEdit }: PostWriteType) => {
  const { user } = authStore();
  const { data: categoryData } = useGetCategory();
  const { data: prevPostData } = useGetPost(postId);
  const router = useRouter();

  useEffect(() => {
    if (prevPostData && user?.id !== prevPostData.author) {
      Notify.failure("비정상적인 접근입니다");
      router.push("/");
    }
  }, [prevPostData, user]);

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
