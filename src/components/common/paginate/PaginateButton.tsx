import { memo } from "react";
import ReactPaginate from "react-paginate";

export type PaginateType = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: { selected: number }) => void;
};
function PaginateBtn({ pageCount, currentPage, onPageChange }: Readonly<PaginateType>) {
  return (
    <ReactPaginate
      previousLabel={"이전"}
      nextLabel={"다음"}
      breakLabel={"..."}
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={onPageChange}
      containerClassName={"flex justify-center space-x-3 text-sm mt-4"}
      previousLinkClassName={"text-main-1 focus:outline-none"}
      nextLinkClassName={"text-main-1 focus:outline-none"}
      pageLinkClassName={"text-main2 focus:font-bold focus:outline-none focus:text-main-1"}
      breakLinkClassName={"page-link"}
      disabledLinkClassName={"focus:text-main-2 cursor-not-allowed"}
    />
  );
}

export default memo(PaginateBtn);
