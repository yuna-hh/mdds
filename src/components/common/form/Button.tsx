"use client";
import throttle from "lodash.throttle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import React, { ComponentProps, MouseEvent, useCallback } from "react";

type ButtonProps = {
  content: string;
  variant?: "default" | "option";
  href?: string;
  confirm?: string;
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
  confirm,
  onClick,
  ...props
}: ButtonProps) => {
  const router = useRouter();
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
    return confirm ? (
      <button
        className={baseButtonStyle}
        onClick={(e) => {
          e.preventDefault();
          Notiflix.Confirm.show(
            "mmds",
            `${confirm}`,
            "Yes",
            "No",
            () => {
              router.push(href);
            },
            () => {
              return;
            }
          );
        }}
      >
        {content}
      </button>
    ) : (
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
