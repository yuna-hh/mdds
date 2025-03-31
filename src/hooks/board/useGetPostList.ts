import { getPostList } from '@/service/post';
import { PostListData } from '@/types/post';
import { useQuery } from '@tanstack/react-query';

export function useGetPostList(page?: number, limit?:number) {
  const {
    data: postListData,
    isPending,
    isError
  } = useQuery<PostListData>({
    queryKey:["postList", page, limit],
    queryFn: ()=>getPostList(page, limit)
  })
  return {postListData, isPending, isError}
}