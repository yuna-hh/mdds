import { deletePost } from '@/service/post'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Notiflix, { Notify } from 'notiflix'

export function useDeletePost(postId: string) {  
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: async (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList"]
      })
      Notify.success("게시글 삭제를 완료했습니다")
      router.push("/");
    },
    onError: (error) => {
      Notify.failure("게시글 삭제 중 오류가 발생하였습니다")
    }

  })

  const handleDeletePost = () => {
    Notiflix.Confirm.show(
      "mmds",
      "게시글을 삭제하시겠습니까?",
            "Yes",
            "No",
            () => {
              mutate(postId)
            },

            () => {
              return;
            }
    )
    
    }
  
  return { handleDeletePost }
}