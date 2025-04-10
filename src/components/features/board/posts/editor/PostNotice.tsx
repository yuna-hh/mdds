import React from "react";

const PostNotice = () => {
  return (
    <div className="flex flex-col gap-[15px] w-full px-[22px] py-[17px] border border-main-1 bg-main-3 rounded-lg">
      <h3 className="font-semibold text-lg">공지</h3>
      <div>
        <h4>[ 청구기준 ]</h4>
        <p>- 목장모임지원비: 최대 10만원, 인원 수 제한 없음</p>
        <p>- 목장심방지원비: 목원 1인당 최대 1만원 (목자는 청구 불가)</p>
        <p className="ml-[15px]">ㄴ심방 목적에 맞게 사용 (원투원)</p>
        <p>- 팀 사역 지원비: 1인 1만원 (회식 목적인 경우에만 해당)</p>
      </div>
      <div>
        <p>
          * 1인 기준으로 청구 시(회식, 심방비 등) 명단과 인원 수 함께
          기재해주세요.
        </p>
        <p>* 입금 받으실 계좌번호 및 영수증 꼭 첨부해주세요.</p>
      </div>
    </div>
  );
};

export default PostNotice;
