"use client";
import { COMMENT_VALIDATION } from "@/constants/validation/commentValidation";
import { useUploadComment } from "@/hooks/board/comment/useUploadComment";
import { useThrottledClick } from "@/hooks/common/useThrottledClick";
import { CommentsRequestType, CommentsResponseType } from "@/types/comment";
import { authStore } from "@/zustand/authStore";
import { useForm, useWatch } from "react-hook-form";
import { useUpdateComment } from "@/hooks/board/comment/useUpdateComment";
import Image from "next/image";
import { RefObject } from "react";

type CommentFormProps = {
  postId: string;
  comment?: CommentsResponseType;
  handleEditMode?: (id: string) => void;
  pageSetRef?: RefObject<boolean>;
};

const CommentForm = ({
  postId,
  comment,
  handleEditMode: handleEditMode,
  pageSetRef,
}: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isValid, isSubmitting },
  } = useForm<CommentsRequestType>({
    mode: "onChange",
    defaultValues: {
      content: comment?.content || "",
    },
  });
  const { user } = authStore();
  const { mutate: uploadComment } = useUploadComment(postId);
  const { mutate: updateComment } = useUpdateComment(
    postId,
    comment?.id as string
  );
  const handleThrottleClick = useThrottledClick();
  const contentValue = useWatch({ control, name: "content" });
  const onSubmit = (data: CommentsRequestType) => {
    const commentData = {
      ...data,
      author: user?.id as string,
      ...(comment && { is_edited: true }),
    };
    // comment ? updateComment(commentData) : uploadComment(commentData);
    if (comment) {
      updateComment(commentData);
    } else {
      uploadComment(commentData);
    }

    if (!comment && pageSetRef) {
      pageSetRef.current = false;
      reset({ content: "" });
    }

    handleEditMode?.("");
    // handleEditMode && handleEditMode("");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row w-full border border-main-1 rounded-lg"
    >
      <div className="flex flex-col grow-6 py-2 sm:py-3 px-[10px] sm:px-4">
        <div className="flex flex-row justify-between items-center">
          <span className="font-semibold">
            {user?.user_metadata.display_name}
          </span>
          {handleEditMode && (
            <button type="button" onClick={() => handleEditMode("")}>
              <Image src="/icon-x.svg" width={13} height={13} alt="닫기" />
            </button>
          )}
        </div>
        <textarea
          placeholder="댓글을 작성해주세요"
          className="mt-[10px] grow-1 outline-none resize-none whitespace-pre-wrap"
          {...register("content", COMMENT_VALIDATION)}
        />
        <span className="ml-auto text-sm">{`${contentValue.length} / 500`}</span>
      </div>
      <button
        onClick={handleThrottleClick}
        type="submit"
        className="grow-1 px-[10px] sm:py-[55px] border-l border-main-1 font-bold disabled:cursor-not-allowed! disabled:text-gray-1"
        disabled={!isValid || isSubmitting}
      >
        {comment ? "수정" : "등록"}
      </button>
    </form>
  );
};

export default CommentForm;
