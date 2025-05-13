import { updatePost, uploadPost } from '@/service/post'
import { PostRequestType} from '@/types/post'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Notify } from 'notiflix'

export default function useUpDatePost(){
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({postData, postId}: {postData: PostRequestType, postId: string}) => updatePost(postData, postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["postData"] })
    },
    onSuccess: (response) => {
      if(response.message === "등록에 실패하였습니다") {
        Notify.failure("게시글 등록에 실패하였습니다. 다시 시도해주세요")
        return
      }
      Notify.success("게시글 등록이 완료되었습니다")
      router.push("/")
    },
    onError: (error) => {
      Notify.failure("게시물 등록 중 네트워크 오류가 발생하였습니다")
    }
  })
}