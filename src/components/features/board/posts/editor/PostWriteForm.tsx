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
  USER_DETAIL_VALIDATION,
} from "@/constants/postValidation";
// import SelectTeam from "./category/SelectTeam";

const PostWriteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="mt-[64px]">
      <PostNotice />
      {/* <SelectTeam /> */}
      <form className="flex flex-col gap-3 mt-3">
        <Input
          label="제목"
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title", TITLE_VALIDATION)}
          // error={errors.title}
        />
        <Input
          label="사용 항목"
          type="text"
          placeholder="사용 항목을 구체적으로 작성해주세요"
          {...register("usage_detail", USAGE_DETAIL_VALIDATION)}
        />
        <Input
          label="명단(인원수 / 참가자 이름)"
          type="text"
          placeholder="명단과 인원수를 작성해주세요"
          {...register("user_detail", USER_DETAIL_VALIDATION)}
        />
        <Input
          label="청구 금액"
          type="number"
          placeholder="청구금액을 숫자로 작성해주세요"
          {...register("price", PRICE_VALIDATION)}
        />
        <Input
          label="입금 계좌(계좌번호 / 은행명 / 예금주)"
          type="text"
          placeholder="입금받을 계좌를 입력해주세요"
          {...register("account", ACCOUNT_VALIDATION)}
        />
        <div className="flex justify-center gap-[9px] mt-[38px] ">
          <Button href="/" content="취소하기" variant="option" />
          <Button content="등록하기" />
        </div>
      </form>
    </div>
  );
};

export default PostWriteForm;
