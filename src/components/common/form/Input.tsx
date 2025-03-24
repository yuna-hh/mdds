import { useId } from "react";

type InputProps = {
  label: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  variant?: "default" | "compact";
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
  ...props
}: InputProps) => {
  const inputId = useId();
  return (
    <div
      className={`flex flex-col gap-[8px] w-full py-[7px] m-auto text-[14px] font-semibold border border-main-1 rounded-lg ${paddingSize[variant]}`}
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
  );
};

export default Input;
