"use client";
import React from "react";
import PostNotice from "./PostNotice";
import { useForm } from "react-hook-form";
import Input from "@/components/common/form/Input";
import Button from "@/components/common/form/Button";
import {
  ACCOUNT_VALIDATION,
  PRICE_VALIDATION,
  TITLE_VALIDATION,
  USAGE_DETAIL_VALIDATION,
  USER_LIST_VALIDATION,
} from "@/constants/validation/postValidation";
import { PostRequestType } from "@/types/post";
import ImageUpload from "@/components/common/form/ImageUpload";
import SelectTeam from "./category/SelectTeam";
import useUploadPost from "@/hooks/board/post/useUploadPost";
import { authStore } from "@/zustand/authStore";

const PostWriteForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostRequestType>();
  const { mutate: uploadPost } = useUploadPost();
  const { user } = authStore();
  const onSubmit = (data: PostRequestType) => {
    const postData = {
      ...data,
      author: user?.id as string,
    };
    uploadPost(postData);
  };
  return (
    <>
      <PostNotice />
      <form
        className="flex flex-col gap-3 mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SelectTeam control={control} errors={errors} />
        <Input
          label="제목"
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title", TITLE_VALIDATION)}
          error={errors.title}
        />
        <Input
          label="사용 항목"
          type="text"
          placeholder="사용 항목을 구체적으로 작성해주세요"
          {...register("usage_detail", USAGE_DETAIL_VALIDATION)}
          error={errors.usage_detail}
        />
        <Input
          label="명단(인원수 / 참가자 이름)"
          type="text"
          placeholder="명단과 인원수를 작성해주세요"
          {...register("user_list", USER_LIST_VALIDATION)}
          error={errors.user_list}
        />
        <Input
          label="청구 금액"
          type="number"
          placeholder="청구금액을 숫자로 작성해주세요"
          {...register("price", PRICE_VALIDATION)}
          error={errors.price}
        />
        <Input
          label="입금 계좌(계좌번호 / 은행명 / 예금주)"
          type="text"
          placeholder="입금받을 계좌를 입력해주세요"
          {...register("account", ACCOUNT_VALIDATION)}
          error={errors.account}
        />
        <ImageUpload control={control} errors={errors} />
        <div className="flex justify-center gap-[9px] mt-[38px] ">
          <Button
            href="/"
            content="취소하기"
            variant="option"
            confirm="글 작성을 취소하시겠습니까?"
          />
          <Button content="등록하기" />
        </div>
      </form>
    </>
  );
};

export default PostWriteForm;
