"use client";
import { PostRequestType } from "@/types/post";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type ImageUploadType = {
  register: UseFormRegister<PostRequestType>;
  watch: UseFormWatch<PostRequestType>;
  // errors: UseFormWatch<PostRequestType>
  setValue: UseFormSetValue<PostRequestType>;
};

const ImageUpload = ({ register, watch, setValue }: ImageUploadType) => {
  const [preview, setPreview] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const image = watch("img_url");

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
      setUploadFile(file);
      const imgUrl = URL.createObjectURL(file);
      setPreview(imgUrl);
    }
  };

  const changeImageType = () => {};

  useEffect(() => {
    if (preview) {
      return () => {
        URL.revokeObjectURL(preview);
      };
    }
  }, [preview]);
  return (
    <label
      htmlFor="image"
      className="py-[25px] text-[18px] font-semibold text-main-2 border border-dashed bg-main-3 rounded-lg cursor-pointer"
    >
      <div className="relative flex flex-col items-center h-[114px]">
        {preview ? (
          <Image
            src={preview}
            fill
            alt="첨부한 이미지"
            className="object-contain w-auto h-auto"
          />
        ) : (
          <>
            <Image
              src={"/icon-plus.svg"}
              width={70}
              height={70}
              priority
              alt="이미지 첨부 아이콘"
              className="mb-[17px]"
            />
            <span>이미지를 추가해주세요</span>
          </>
        )}
      </div>

      <input
        id="image"
        type="file"
        className="hidden"
        {...register("img_url")}
        onChange={(e) => imageHandler(e)}
      />
    </label>
  );
};

export default ImageUpload;
