import Button from "@/components/common/form/Button";
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
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<JoinDataType>({
  //   mode: "onChange",
  // });
  return (
    <div>
      <Input
        label="이름"
        type="text"
        placeholder="홍길동"
        required
        variant="default"
        name="username"
      />
      <Button content="등록하기" href="/" />
    </div>
  );
};

export default JoinForm;
