const ListHeader = () => {
  return (
    <header className="text-[18px] font-bold border border-main-1 bg-main-3 rounded-lg board-style board-md border-not-first">
      <span>번호</span>
      <span>분류</span>
      <span>제목</span>
      <span>작성자</span>
      <span>작성일</span>
    </header>
  );
};

export default ListHeader;
