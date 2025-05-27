"use client";

import Loading from "@/components/common/status/Loading";
import { useGetComment } from "@/hooks/board/comment/useGetComment";
import Empty from "@/components/common/status/Empty";
import CommentList from "./CommentList";
import CommentForm from "../editor/CommentForm";
import CommentSkeleton from "@/components/common/status/skeleton/CommentSkeleton";
import usePagination from "@/hooks/common/usePagination";
import { useEffect, useRef } from "react";
import PaginateButton from "@/components/common/paginate/PaginateButton";
import { calculateLastPageIndex } from "@/utils/paginate/pagination";

const CommentSection = ({ postId }: { postId: string }) => {
  const { page, limit, onPageChange, currentPage, setCurrentPage } =
    usePagination();
  const { data, isPending } = useGetComment(postId, page, limit);

  const pageSetRef = useRef(false);

  useEffect(() => {
    if (data && !pageSetRef.current && data.count > 0) {
      const lastPage = calculateLastPageIndex(data.count);
      setCurrentPage(lastPage);
      pageSetRef.current = true;
    }
  }, [data?.count]);

  if (!data) return <Loading />;
  if (isPending) return <CommentSkeleton />;

  return (
    <div className="flex flex-col gap-3 w-full mt-[25px] mb-[50px]">
      <span className="font-bold">댓글 {data.count}</span>
      {data.data.length > 0 ? (
        <CommentList data={data} postId={postId} />
      ) : (
        <Empty content="댓글" />
      )}
      <CommentForm postId={postId} pageSetRef={pageSetRef} />
      {data.count > 0 && (
        <PaginateButton
          pageCount={Math.ceil((data.count ?? 0) / limit)}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CommentSection;
