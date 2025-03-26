"use client";
import Button from "@/components/common/form/Button";
import Input from "@/components/common/form/Input";
import { validation } from "@/constants/userValidation";
import { useSubmitJoin } from "@/hooks/auth/useSubmitJoin";
import { JoinDataType } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinDataType>({
    mode: "onChange",
  });
  const password = watch("password");
  const handleSubmitJoin = useSubmitJoin();
  const onSubmit = (data: JoinDataType) => {
    handleSubmitJoin(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-[10px] mt-[200px]"
    >
      <Input
        label="아이디"
        type="email"
        placeholder="이메일 형식으로 입력해주세요"
        required
        variant="compact"
        {...register("email", validation())}
      />
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호(8~20자)로 입력해주세요"
        required
        variant="compact"
        {...register("password", validation())}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        required
        variant="compact"
        {...register("passwordConfirm", validation())}
      />
      <Input
        label="실명"
        type="text"
        placeholder="실명을 입력해주세요"
        required
        variant="compact"
        {...register("name", validation())}
      />
      <Input
        label="휴대전화"
        type="number"
        placeholder="-없이 숫자만 입력"
        variant="compact"
        {...register("phone", validation())}
      />
      <Button content="회원가입" type="submit" />
    </form>
  );
};

export default JoinForm;
