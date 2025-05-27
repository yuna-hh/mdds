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

const PostList = () => {
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
      <ul className="mt-3 border border-main-1 rounded-[8px] border-not-last">
        {postListData?.data.map((post, index) => (
          <li key={post.id}>
            <Link
              href={user ? `/board/detail/${post.id}` : `/login`}
              className="text-[16px] board-style border-not-first board-sm"
              onClick={() =>
                !user && Notify.warning("로그인 후 이용 가능합니다")
              }
            >
              <span>{postListData.count - (page - 1) * limit - index}</span>
              <span>{post.teams.team}</span>
              <span className="truncate">{post.title}</span>
              <span>{post.user.name}</span>
              <span>{post.created_at.substring(0, 10)}</span>
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

export default PostList;
