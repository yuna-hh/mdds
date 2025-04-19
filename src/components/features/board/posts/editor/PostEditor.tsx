"use client";
import React from "react";
import PostWriteForm from "./PostWriteForm";
import { useGetCategory } from "@/hooks/board/post/useGetCategory";
import Loading from "@/components/common/status/Loading";
import { authStore } from "@/zustand/authStore";

const PostEditor = () => {
  const { data: categoryData } = useGetCategory();
  const { user } = authStore();
  if (!categoryData) return <Loading />;
  return <PostWriteForm categoryData={categoryData} user={user} />;
};

export default PostEditor;
