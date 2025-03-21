import { getPosts } from "@/service/post";
import { PostListType } from "@/types/post";

import Link from "next/link";

const PostList = async () => {
  const posts: PostListType[] = await getPosts();
  return (
    <ul className="mt-3 border border-main-1 rounded-[8px] border-not-last">
      {posts.map((post, index) => (
        <li key={post.id}>
          <Link href={`/board/detail/${post.id}`} className="text-[16px] board-style border-not-first board-sm">
            <span>{posts.length - index}</span>
            <span>{post.teams.team}</span>
            <span>{post.title}</span>
            <span>{post.author}</span>
            <span>{post.created_at.substring(0, 10)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
