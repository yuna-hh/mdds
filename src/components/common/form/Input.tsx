import Image from "next/image";
import { useId } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  label: string;
  type: "text" | "number" | "email" | "password" | "tel";
  placeholder?: string;
  required?: boolean;
  variant?: "default" | "compact";
  error?: FieldError;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<React.ComponentProps<"input">, "onChange">;
const paddingSize = {
  default: "px-[12px]",
  compact: "px-[7px]",
};

const Input = ({
  label,
  type,
  placeholder,
  required,
  variant = "default",
  error,
  ...props
}: InputProps) => {
  const inputId = useId();

  // if (type === "file")
  //   return (
  //     <label
  //       htmlFor={inputId}
  //       className="flex flex-col items-center py-[25px] text-[18px] font-semibold text-main-2 border border-dashed bg-main-3 rounded-lg"
  //     >
  //       <Image
  //         src={"/icon-plus.svg"}
  //         width={70}
  //         height={70}
  //         alt="이미지 첨부 아이콘"
  //         className="mb-[17px]"
  //       />
  //       {label}
  //       <input
  //         id={inputId}
  //         type={type}
  //         placeholder={placeholder}
  //         {...props}
  //         className="hidden"
  //       />
  //     </label>
  //   );
  return (
    <div className="w-full text-[14px]">
      <div
        className={`flex flex-col gap-[8px] py-[7px] font-semibold border border-main-1 rounded-lg ${paddingSize[variant]}`}
      >
        <label htmlFor={inputId}>
          {label}
          {required && <span className="ml-[4px] text-red">*</span>}
        </label>
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          {...props}
          className="text-[18px]"
        />
      </div>
      {error && (
        <span className="inline-block ml-[4px] mt-[2px] text-red">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
