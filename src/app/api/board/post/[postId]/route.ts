import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params } : { params: { postId: string }}) {
  const supabase = await createClient()
  const { postId } = await params
  try{
    const { data, error } = await supabase
    .from("posts")
    .select(`*, teams(team)`)
    .eq("id", postId)
    .single()

    if(error) return handleError("데이터를 불러오는데 실패하였습니다")
    return handleSuccess(data)
  } catch (error) {
    console.log(error)
    return handleNetworkError()
  }
}


export async function DELETE(
  request: NextRequest,
  { params } : { params: { postId: string }}
) {
  const supabase = await createClient()
  const { postId } = await params
  try {
    const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", postId )

    if(error) return handleError("게시글 삭제를 실패하였습니다")
    return handleSuccess("게시글 삭제가 완료되었습니다")
  } catch (error) {
    console.log(error)
    handleNetworkError()
  }
}

export async function PATCH(
  request: NextRequest,
  {params} : {params: {postId: string}}
) {
  const supabase = await createClient()
  const { postId } = await params
  const postData = await request.json()
  try {
    const { data, error } = await supabase
    .from("posts")
    .update(postData)
    .eq("id", postId)
    if(error) return handleError("게시글 수정을 실패하였습니다")
    return handleSuccess("게시글 수정이 완료되었습니다")
  } catch (error) {
    console.log(error)
    handleNetworkError()
  }
}