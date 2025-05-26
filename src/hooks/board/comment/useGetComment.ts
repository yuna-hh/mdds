import { getCommentList } from '@/service/comment'
import { commentListData } from '@/types/comment'
import { useQuery } from '@tanstack/react-query'

export function useGetComment(postId: string, page?: number, limit?: number) {
  const {data, isPending, isError } = useQuery<commentListData>({
    queryKey: ["comments", postId, page, limit],
    queryFn: () => getCommentList(postId, page, limit),
  })
  return {data, isPending, isError}
}