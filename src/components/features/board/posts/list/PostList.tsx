"use client";
import { useGetPostList } from "@/hooks/board/useGetPostList";
import Link from "next/link";

const PostList = () => {
  const { posts, isPending, isError } = useGetPostList();
  console.log(posts);
  return (
    <ul className="mt-3 border border-main-1 rounded-[8px] border-not-last">
      {posts.map((post, index) => (
        <li key={post.id}>
          <Link
            href={`/board/detail/${post.id}`}
            className="text-[16px] board-style border-not-first board-sm"
          >
            <span>{posts.length - index}</span>
            <span>{post.teams.team}</span>
            <span>{post.title}</span>
            <span>{post.user.name}</span>
            <span>{post.created_at.substring(0, 10)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
