import throttle from "lodash.throttle";
import Link from "next/link";
import React, { ComponentProps, MouseEvent, useCallback } from "react";

type ButtonProps = {
  content: string;
  variant?: "default" | "option";
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ComponentProps<"button">;

const bgColor = {
  default: "bg-main-1",
  option: "bg-main-2",
};

const Button = ({
  content,
  variant = "default",
  href,
  onClick,
  ...props
}: ButtonProps) => {
  const throttledClick = useCallback(
    throttle((event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    }, 800),
    [onClick]
  );

  // 추후에 스타일 보면서 변경하기
  const baseButtonStyle = `block w-[225px] py-[20px] text-2xl font-bold text-center text-white rounded-lg cursor-pointer ${bgColor[variant]}`;
  if (href) {
    return (
      <Link href={href} className={baseButtonStyle}>
        {content}
      </Link>
    );
  }
  return (
    <button className={baseButtonStyle} onClick={throttledClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
