"use client";
import { CommentsRequestType } from "@/types/comment";
import { authStore } from "@/zustand/authStore";
import React from "react";
import { useForm } from "react-hook-form";

const CommentWrite = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsRequestType>();
  const { user } = authStore();
  console.log(user);
  return (
    <form className="flex flex-row border border-main-1 rounded-lg">
      <div className="flex flex-col grow-6 py-3 px-4">
        <span className="font-semibold mb-[10px]">
          {user?.user_metadata.display_name}
        </span>
        <textarea
          id=""
          placeholder="댓글을 작성해주세요"
          className="grow-1 outline-none resize-none"
          {...register("content")}
        />
      </div>
      <button className="grow-1 py-[55px] border-l border-main-1 font-bold">
        등록
      </button>
    </form>
  );
};

export default CommentWrite;
