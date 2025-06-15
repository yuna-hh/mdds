"use client";
import PaginateButton from "@/components/common/paginate/PaginateButton";
import Empty from "@/components/common/status/Empty";
import Loading from "@/components/common/status/Loading";
import { useGetPostList } from "@/hooks/board/useGetPostList";
import usePagination from "@/hooks/common/usePagination";
import { calculatePageIndex } from "@/utils/paginate/pagination";
import { authStore } from "@/zustand/authStore";
import Link from "next/link";
import { Notify } from "notiflix";

const MobilePostList = () => {
  const { page, limit, onPageChange, currentPage } = usePagination();
  const { postListData, isPending } = useGetPostList(page, limit);
  const { user } = authStore();
  if (isPending) return <Loading />;
  if (!postListData) return <Empty content="게시글" />;
  return (
    <>
      {postListData?.data && postListData.data.length === 0 && (
        <Empty content="게시글" />
      )}
      <ul className="border border-main-1 rounded-[8px] border-not-last">
        {postListData?.data.map((post, index) => (
          <li key={post.id}>
            <Link
              href={user ? `/board/detail/${post.id}` : `/login`}
              className="grid grid-cols-[1fr_6fr] items-center"
              onClick={() =>
                !user && Notify.warning("로그인 후 이용 가능합니다")
              }
            >
              <div className="text-center">
                <span>{postListData.count - (page - 1) * limit - index}</span>
              </div>
              <div className="px-[7px] py-[6px] border-l border-main-1 ">
                <span>{post.title}</span>
                <div className="flex gap-[3px] text-[12px] text-main-2">
                  <span>{post.user.name}</span>
                  <span>･</span>
                  <span>{post.created_at.substring(0, 10)}</span>
                </div>
                <span className="block text-[13px] text-main-2 leading-tight">
                  {post.teams.team}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <PaginateButton
        pageCount={calculatePageIndex(postListData?.count, true)}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default MobilePostList;
