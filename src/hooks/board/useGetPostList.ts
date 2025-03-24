import { getPostList } from '@/service/post';
import { PostListType } from '@/types/post';
import { useQuery } from '@tanstack/react-query';

export function useGetPostList() {
  const {
    data: posts = [],
    isPending,
    isError
  } = useQuery<PostListType[]>({
    queryKey:["postList"],
    queryFn: getPostList
  })
  return {posts, isPending, isError}
}