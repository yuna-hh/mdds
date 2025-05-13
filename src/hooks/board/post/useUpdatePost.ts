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
      queryClient.invalidateQueries({ queryKey: ["postList"] })
    },
    onSuccess: (response, { postId }) => {
      if(response.message === "게시글 수정을 실패하였습니다") {
        Notify.failure("게시글 수정에 실패하였습니다. 다시 시도해주세요")
        return
      }
      Notify.success("게시글 수정이 완료되었습니다")
      router.push(`/board/detail/${postId}`)
      // router.push(`/`)
    },
    onError: (error) => {
      Notify.failure("게시물 수정 중 네트워크 오류가 발생하였습니다")
    }
  })
}