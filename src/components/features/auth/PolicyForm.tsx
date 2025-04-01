"use client";
import { POLICY_VALIDATION } from "@/constants/authValidation";
import { JoinDataType } from "@/types/auth";
import Image from "next/image";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

type PolicyPropsType = {
  register: UseFormRegister<JoinDataType>;
  watch: UseFormWatch<JoinDataType>;
  errors: FieldErrors<JoinDataType>;
};

const PolicyForm = ({ register, watch, errors }: PolicyPropsType) => {
  const isChecked = watch("policy");
  return (
    <div>
      <label className="flex flex-row gap-[10px] items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          {...register("policy", POLICY_VALIDATION)}
        />
        <Image
          src={isChecked ? "/icon-checkbox-checked.svg" : "/icon-checkbox.svg"}
          width={17}
          height={17}
          className="aspect-square"
          alt="체크박스"
        />
        <span>개인정보 수집 및 이용에 동의합니다.</span>
      </label>
      {errors?.policy && (
        <span className="inline-block ml-[4px] mt-[2px] text-red">
          {errors.policy.message}
        </span>
      )}
    </div>
  );
};

export default PolicyForm;
