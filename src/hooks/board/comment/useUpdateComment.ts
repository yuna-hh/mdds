import { updateComment } from '@/service/comment'
import { CommentsRequestType } from '@/types/comment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Notify } from 'notiflix'

export const useUpdateComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (commentData: CommentsRequestType) => updateComment(postId, commentId, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", postId]})
    },
    onError: (error) => {
      Notify.failure("댓글 수정 중 네트워크 오류가 발생하였습니다")
      console.log(error)
    }
  })
}