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
