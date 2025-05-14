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
    .select(`*,author(name)`)
    .eq("post_id", postId)

    if(error) return handleError("데이터를 불러오는데 실패하였습니다")

    return handleSuccess(data)
  } catch (error) {
    return handleNetworkError()
  } 
}

