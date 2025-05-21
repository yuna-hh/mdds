import { memo } from "react";
import ReactPaginate from "react-paginate";

export type PaginateType = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: { selected: number }) => void;
};
function PaginateBtn({
  pageCount,
  currentPage,
  onPageChange,
}: Readonly<PaginateType>) {
  return (
    <ReactPaginate
      previousLabel={"이전"}
      nextLabel={"다음"}
      breakLabel={"..."}
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={onPageChange}
      containerClassName={"flex justify-center space-x-3 text-sm mt-4"}
      previousLinkClassName={"text-main-1 focus:outline-none cursor-pointer"}
      nextLinkClassName={"text-main-1 focus:outline-none cursor-pointer"}
      pageLinkClassName={"text-main-2 focus:outline-none cursor-pointer"}
      breakLinkClassName={"page-link"}
      disabledLinkClassName={"focus:text-main-2 !cursor-not-allowed"}
      activeClassName={"!font-bold"}
      activeLinkClassName={"!text-main-1 !font-bold"}
    />
  );
}

export default memo(PaginateBtn);
