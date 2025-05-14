import { PostRequestType } from '@/types/post'

export async function getPostList(
  page?: number,
  limit?: number
) {
  const BASE_URL = "/api/board"
  const url = page && limit ? `${BASE_URL}?page=${page}&limit=${limit}` : BASE_URL
  const response = await fetch(url)
  const data = await response.json()
  return data.data
}

export async function getPost(postId: string){
  const response = await fetch(`/api/board/post/${postId}`)
  const data = await response.json()
  return data.data
}

export async function getCategory() {
  const response = await fetch("/api/board/category")
  const data = await response.json()
  return data.data
}

export async function uploadImage (formData: FormData) {
  const response = await fetch("/api/board/post/image", {
    method: "POST",
    body: formData
  })
  return response.json()
}

export async function uploadPost(data: PostRequestType) {
  const response = await fetch("/api/board/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export async function deletePost(postId: string) {
  const response = await fetch(`/api/board/post/${postId}`,{
    method: "DELETE",
  })
  return response.json()
}

export async function getComments(postId: string){
  const response = await fetch(`/api/board/post/comments/${postId}`)
  const {data} = await response.json()
  return data ?? []
}

export async function deleteComments(postId: string, commentId: string){
  const response = await fetch(`/api/board/post/comments/${postId}/${commentId}`,{
    method: "DELETE"
  })
  return response.json()
}
