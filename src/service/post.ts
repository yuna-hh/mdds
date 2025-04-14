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