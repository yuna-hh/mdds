import { getComment } from '@/service/comment'
import { CommentsResponseType } from '@/types/comment'
import { useQuery } from '@tanstack/react-query'

export function useGetComment(postId: string) {
  const {data = [], isPending, isError } = useQuery<CommentsResponseType[]>({
    queryKey: ["comments", postId],
    queryFn: () => getComment(postId),
  })
  return {data, isPending, isError}
}