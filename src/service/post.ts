export async function getPostList() {
  const response = await fetch("/api/board")
  const data = await response.json()
  return data.data
}