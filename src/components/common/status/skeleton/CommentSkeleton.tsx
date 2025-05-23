import React from "react";

const CommentSkeleton = () => {
  return (
    <div className="w-full mb-[50px] text-gray-1 text-[16px] animate-pulse">
      <div>댓글</div>
      <div className="flex flex-col gap-[20px] mt-[10px]">
        <div className="flex flex-col gap-[15px] w-full px-[16px] py-[16px] border border-gray-1 rounded-lg">
          <div className="w-[200px] h-[12px] bg-gray-1 rounded-md"></div>
          <div className="w-[120px] h-[12px] bg-gray-1 rounded-md"></div>
          <div className="w-[500px] h-[12px] bg-gray-1 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-[15px] w-full px-[16px] py-[16px] border border-gray-1 rounded-lg">
          <div className="w-[60px] h-[12px] bg-gray-1 rounded-md"></div>
          <div className="w-[200px] h-[12px] bg-gray-1 rounded-md"></div>
          <div className="w-[120px] h-[12px] bg-gray-1 rounded-md"></div>
          <div className="flex flex-row gap-[10px] ml-auto">
            <div>수정</div>
            <div>삭제</div>
          </div>
        </div>
        <div className="flex flex-row w-full border border-gray-1 rounded-lg">
          <div className="relative grow-8">
            <div className="absolute bottom-0 right-0 mb-[12px] mr-[16px] text-sm">
              0 / 500
            </div>
          </div>
          <div className="grow-1 py-[55px] text-center font-semibold border-l border-gray-1">
            등록
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
