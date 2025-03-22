import Link from "next/link";
import React, { ComponentProps } from "react";

type ButtonProps = {
  content: string;
  variant?: "default" | "option";
  href?: string;
} & ComponentProps<"button">;

const bgColor = {
  default: "bg-main-1",
  option: "bg-main-2",
};

const Button = ({
  content,
  variant = "default",
  href,
  ...props
}: ButtonProps) => {
  // 추후에 스타일 보면서 변경하기
  const baseButtonStyle = `block w-[225px] py-[20px] text-2xl font-bold text-center text-white rounded-lg ${bgColor[variant]}`;
  if (href) {
    return (
      <Link href={href} className={baseButtonStyle}>
        {content}
      </Link>
    );
  }
  return (
    <button {...props} className={baseButtonStyle}>
      {content}
    </button>
  );
};

export default Button;
