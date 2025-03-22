import Input from "@/components/common/form/Input";
import React from "react";
import { useForm } from "react-hook-form";

type JoinDataType = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phoneNumber: number;
};

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinDataType>({
    mode: "onChange",
  });
  return (
    <Input
      label="이름"
      type="text"
      placeholder="홍길동"
      required
      variant="default"
      name="username"
    />
  );
};

export default JoinForm;
