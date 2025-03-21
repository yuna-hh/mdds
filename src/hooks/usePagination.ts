"use client";
import { useCallback, useState } from "react";

export function usePagination() {
  const limit = 5;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const page = currentPage + 1;

  const onPageChange = useCallback((selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  }, []);

  return {
    page,
    limit,
    onPageChange,
    currentPage,
  };
}

export default usePagination;
