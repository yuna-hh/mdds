"use client";
import PaginateButton from "@/components/common/paginate/PaginateButton";
import { useGetPostList } from "@/hooks/board/useGetPostList";
import usePagination from "@/hooks/usePagination";
import { authStore } from "@/zustand/authStore";
import Link from "next/link";

const PostList = () => {
  const { page, limit, onPageChange, currentPage } = usePagination();
  const { postListData, isPending, isError } = useGetPostList(page, limit);
  const { user } = authStore();
  return (
    <>
      <ul className="mt-3 border border-main-1 rounded-[8px] border-not-last">
        {postListData?.data.map((post, index) => (
          <li key={post.id}>
            <Link
              href={user ? `/board/detail/${post.id}` : `/login`}
              className="text-[16px] board-style border-not-first board-sm"
            >
              <span>{postListData.count - (page - 1) * limit - index}</span>
              <span>{post.teams.team}</span>
              <span>{post.title}</span>
              <span>{post.user.name}</span>
              <span>{post.created_at.substring(0, 10)}</span>
            </Link>
          </li>
        ))}
      </ul>
      <PaginateButton
        pageCount={Math.ceil((postListData?.count ?? 0) / limit)}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default PostList;
