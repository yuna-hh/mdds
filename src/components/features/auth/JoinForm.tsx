"use client";
import Button from "@/components/common/form/Button";
import Input from "@/components/common/form/Input";
import {
  EMAIL_VALIDATION,
  PASSWORD_CONFIRM_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_NUMBER_VALIDATION,
  USER_NAME_VALIDATION,
} from "@/constants/validation/authValidation";
import { useSubmitJoin } from "@/hooks/auth/useSubmitJoin";
import { JoinDataType } from "@/types/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Policy from "./Policy";
import PolicyForm from "./PolicyForm";

const JoinForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  const handlePolicyOpen = () => {
    setIsOpen(!isOpen);
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
        autoComplete="email"
        {...register("email", EMAIL_VALIDATION)}
        error={errors.email}
      />
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호(6~20자)로 입력해주세요"
        required
        variant="compact"
        autoComplete="new-password"
        {...register("password", PASSWORD_VALIDATION)}
        error={errors.password}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        required
        variant="compact"
        autoComplete="new-password"
        {...register("passwordConfirm", PASSWORD_CONFIRM_VALIDATION(password))}
        error={errors.passwordConfirm}
      />
      <Input
        label="실명"
        type="text"
        placeholder="실명을 입력해주세요"
        required
        variant="compact"
        {...register("name", USER_NAME_VALIDATION)}
        error={errors.name}
      />
      <Input
        label="휴대전화"
        type="tel"
        placeholder="-없이 숫자만 입력"
        variant="compact"
        {...register("phone", PHONE_NUMBER_VALIDATION)}
        error={errors.phone}
      />
      <div className="flex flex-row justify-between w-full mb-10 text-[14px]">
        <PolicyForm register={register} watch={watch} errors={errors} />
        <button
          type="button"
          onClick={handlePolicyOpen}
          className="underline cursor-pointer"
        >
          보기
        </button>
        {isOpen && <Policy isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <Button content="회원가입" type="submit" />
    </form>
  );
};

export default JoinForm;
