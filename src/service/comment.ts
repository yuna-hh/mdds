import { CommentsRequestType } from '@/types/comment'

export async function getCommentList(postId: string, page?: number, limit?: number){
  const BASE_URL = `/api/board/post/comments/${postId}`
  const url = page && limit ? `${BASE_URL}?page=${page}&limit=${limit}` : BASE_URL
  const response = await fetch(url)
  const { data } = await response.json()
  return data
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

export async function updateComment(postId: string, commentId: string, commentData: CommentsRequestType ) {
  const response = await fetch(`/api/board/post/comments/${postId}/${commentId}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData)
  })
  return response.json()
}