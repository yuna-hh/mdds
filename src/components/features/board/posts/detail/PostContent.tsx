import React from "react";

const PostContent = () => {
  return (
    <div>
      <div className="w-full p-[18px] border border-main-1 bg-main-3">
        <span>[목장지원비]</span>
        <span>민수 목장 모임 지원비</span>
      </div>
      <div>
        <ul>
          <li>사용항목 : 목장 모임 지원비</li>
          <li>청구금액: 32,800원</li>
          <li>명단 / 인원수 : 5명 (조민수, 어쩌구, 저쩌구)</li>
          <li>입금계좌: 12345-78-4567 / 국민은행 / 조민수</li>
        </ul>
      </div>
    </div>
  );
};

export default PostContent;
