"use client";
import { useThrottledClick } from "@/hooks/common/useThrottledClick";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import React, { ComponentProps, MouseEvent } from "react";

type ButtonProps = {
  content: string;
  variant?: "default" | "option";
  href?: string;
  confirm?: string;
  disable?: boolean;
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
  disable,
  onClick,
  ...props
}: ButtonProps) => {
  const router = useRouter();
  const throttledClick = useThrottledClick(onClick);

  const baseButtonStyle = `block w-[225px] py-[20px] text-2xl font-bold text-center text-white rounded-lg ${bgColor[variant]} disabled:cursor-not-allowed! disabled:bg-gray-1!`;
  if (href) {
    return confirm ? (
      <button
        className={baseButtonStyle}
        onClick={(e) => {
          e.preventDefault();
          Notiflix.Confirm.show(
            "mdds",
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
    <button
      className={baseButtonStyle}
      onClick={throttledClick}
      {...props}
      disabled={disable}
    >
      {content}
    </button>
  );
};

export default Button;
