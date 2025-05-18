"use client";
import { COMMENT_VALIDATION } from "@/constants/validation/commentValidation";
import { useUploadComment } from "@/hooks/board/comment/useUploadComment";
import { useThrottledClick } from "@/hooks/common/useThrottledClick";
import { CommentsRequestType } from "@/types/comment";
import { authStore } from "@/zustand/authStore";
import { useForm, useWatch } from "react-hook-form";

const CommentWrite = ({ postId }: { postId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isValid, isSubmitting },
  } = useForm<CommentsRequestType>({
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  });
  const { user } = authStore();
  const { mutate: uploadComment } = useUploadComment(postId);
  const handleThrottleClick = useThrottledClick();
  const contentValue = useWatch({ control, name: "content" });
  const onSubmit = (data: CommentsRequestType) => {
    const commentData = {
      ...data,
      author: user?.id as string,
    };
    uploadComment(commentData);
    reset({ content: "" });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row border border-main-1 rounded-lg"
    >
      <div className="flex flex-col grow-6 py-3 px-4">
        <span className="font-semibold mb-[10px]">
          {user?.user_metadata.display_name}
        </span>
        <textarea
          placeholder="댓글을 작성해주세요"
          className="grow-1 outline-none resize-none"
          {...register("content", COMMENT_VALIDATION)}
        />
        <span className="ml-auto text-sm">{`${contentValue.length} / 500`}</span>
      </div>
      <button
        onClick={handleThrottleClick}
        type="submit"
        className="grow-1 py-[55px] border-l border-main-1 font-bold disabled:cursor-not-allowed! disabled:text-gray-1"
        disabled={!isValid || isSubmitting}
      >
        등록
      </button>
    </form>
  );
};

export default CommentWrite;
