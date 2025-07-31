import Image from "next/image";
import React from "react";

type ImageLightboxProps = {
  img_url: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageLightbox = ({ img_url, setIsOpen }: ImageLightboxProps) => {
  return (
    <div className="absolute w-[1000px] py-[40px] border border-main-1 bg-white rounded-lg">
      <div className="max-w-[800px] m-auto">
        <button
          className="absolute top-3 right-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/icon-x.svg"
            width={25}
            height={25}
            alt="이미지 확대창 닫기"
          />
        </button>
        <Image
          src={img_url}
          width={0}
          height={0}
          sizes="800px"
          alt="첨부된 이미지"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ImageLightbox;
