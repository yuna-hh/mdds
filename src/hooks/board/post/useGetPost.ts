import { getPost } from '@/service/post'
import { PostResponseType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

export function useGetPost(postId?: string) {
  const {data,
    isPending,
    isError
  } = useQuery<PostResponseType>({
    queryKey: ["postData", postId],
    queryFn: () => getPost(postId!),
    enabled: !!postId
  })
  return {data, isPending, isError}
}