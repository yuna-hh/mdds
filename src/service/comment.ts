import { CommentsRequestType } from '@/types/comment'
import { PostRequestType } from '@/types/post';

type commentProps = {
  postId: string;
  commentId: string;
}

export async function getComment(postId: string){
  const response = await fetch(`/api/board/post/comments/${postId}`)
  const {data} = await response.json()
  return data ?? []
}

export async function deleteComment(postId: string, commentId: string){
  const response = await fetch(`/api/board/post/comments/${postId}/${commentId}`,{
    method: "DELETE"
  })
  return response.json()
}

export async function uploadComment(commentData: CommentsRequestType, postId: string) {
  const response = await fetch(`/api/board/post/comments/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData)
  })
  return response.json()
}

export async function updateComment(postId: string, commentId: string, commentData: PostRequestType ) {
  const response = await fetch(`/api/board/post/comments/${postId}/${commentId}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData)
  })
  return response.json()
}