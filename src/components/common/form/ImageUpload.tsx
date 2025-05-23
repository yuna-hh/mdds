"use client";
import {
  extensionValidation,
  IMAGE_VALIDATION,
} from "@/constants/validation/postValidation";
import useUploadImage from "@/hooks/board/post/useUploadImage";
import { handleCompression } from "@/hooks/common/useImageCompression";
import { PostRequestType } from "@/types/post";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

type ImageUploadProps = {
  control: Control<PostRequestType, string>;
  errors: FieldErrors<PostRequestType>;
  prevImageUrl?: string;
};

const ImageUpload = ({ control, errors, prevImageUrl }: ImageUploadProps) => {
  const [preview, setPreview] = useState(prevImageUrl || "");
  const { mutate: uploadImage } = useUploadImage();

  const imageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: unknown[]) => void
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!extensionValidation(file)) return;
      const { compressedImageUrl, compressedImage } = await handleCompression(
        file
      );
      setPreview(compressedImageUrl);

      const formData = new FormData();
      formData.append("file", compressedImage as File);

      uploadImage(formData, {
        onSuccess: (data) => {
          onChange(
            `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}board//${data.data}`
          );
        },
      });
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <Controller
      name="img_url"
      control={control}
      rules={IMAGE_VALIDATION}
      render={({ field: { onChange } }) => (
        <div className="flex flex-col">
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
              accept="image/jpg, image/png, image/webp, image/jpeg"
              onChange={(e) => imageHandler(e, onChange)}
            />
          </label>
          {errors?.img_url && (
            <span className="inline-block ml-[4px] mt-[2px] text-[14px] text-red">
              {errors.img_url.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default ImageUpload;
