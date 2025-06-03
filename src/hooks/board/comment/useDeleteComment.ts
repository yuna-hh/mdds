import { deleteComment } from '@/service/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Notiflix, { Notify } from 'notiflix';

type DeleteCommentProps = {
  postId: string;
  commentId: string
}

export function useDeleteComment({postId, commentId}: DeleteCommentProps) {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: async ({postId, commentId}: DeleteCommentProps) => deleteComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId]
      })
    },
    onError: (error) => {
      console.log(error)
      Notify.failure("댓글 삭제 중 오류가 발생하였습니다")
    }
  })


  const handleDeleteComment = () => {
  Notiflix.Confirm.show(
        "mmds",
        "댓글을 삭제하시겠습니까?",
              "Yes",
              "No",
              () => {
                mutate({postId, commentId})
              },
  
              () => {
                return;
              }
      )
}
return {handleDeleteComment}
}