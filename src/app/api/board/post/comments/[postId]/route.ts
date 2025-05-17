import { createClient } from "@/supabase/server";
import { handleError, handleNetworkError, handleSuccess } from "@/utils/response/api";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest,
  {params}: {params: {postId: string}}) {
  const supabase = await createClient()
  const {postId} = await params;
  try{
    const { data, error } = await supabase
    .from("comments")
    .select(`*, user(name)`)
    .eq("post_id", postId)

    if(error) return handleError("데이터를 불러오는데 실패하였습니다")

    return handleSuccess(data)
  } catch (error) {
    return handleNetworkError()
  } 
}

export async function POST(
  request: NextRequest, 
  { params }: { params: { postId: string}}) {
    const supabase = await createClient()
    const { postId } = await params
    const commentData = await request.json()
    try {
      const { data, error } = await supabase
      .from("comments")
      .insert({
        author: commentData.author,
        content: commentData.content,
        post_id: postId
      })

      if(error) {
        return handleError("등록에 실패하였습니다")
      }
      return handleSuccess(data, "등록 완료되었습니다")
    } catch(error) {
      console.log(error)
      return handleNetworkError()
    }
}