"use client";
import Button from "@/components/common/form/Button";
import Input from "@/components/common/form/Input";
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from "@/constants/validation/authValidation";
import { useSubmitLogin } from "@/hooks/auth/useSubmitLogin";
import { LoginType } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const handleSubmitLogin = useSubmitLogin();

  const onSubmit = (data: LoginType) => {
    handleSubmitLogin(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-[10px] mt-[200px]"
    >
      <Input
        label="아이디"
        type="email"
        variant="compact"
        autoComplete="email"
        {...register("email", EMAIL_VALIDATION)}
        error={errors.email}
      />
      <Input
        label="비밀번호"
        type="password"
        variant="compact"
        autoComplete="new-password"
        {...register("password", PASSWORD_VALIDATION)}
        error={errors.password}
      />
      <span className="mr-auto mt-[6px] mb-[40px] text-sm">
        아이디 및 비밀번호 찾기는 지원하지 않습니다.
      </span>
      <Button content="로그인" type="submit" />
    </form>
  );
};

export default LoginForm;
