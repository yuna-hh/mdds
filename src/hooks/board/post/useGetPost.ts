import { getPost } from '@/service/post'
import { PostDataType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

export function useGetPost(postId: string) {
  const {data,
    isPending,
    isError
  } = useQuery<PostDataType[]>({
    queryKey: ["postData", postId],
    queryFn: () => getPost(postId),
  })
  return {data, isPending, isError}
  // const { data, error } = useSuspenseQuery<PostDataType[]>({
  //   queryKey: ["postData", postId],
  //   queryFn: () => getPost(postId),
  // })
  // if(error) {
  //   console.log(error)
  // }
  // return {data}
}