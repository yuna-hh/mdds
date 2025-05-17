import { uploadComment } from '@/service/comment';
import { CommentsRequestType } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Notify } from 'notiflix';

export function useUploadComment(postId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async(commentData: CommentsRequestType) => uploadComment(commentData, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", postId]})
    },
    onError: (error) => {
      Notify.failure("댓글 등록 중 네트워크 오류가 발생하였습니다")
    }
  })
}