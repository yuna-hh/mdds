import { createClient } from "@/supabase/server"
import { handleError, handleNetworkError, handleSuccess } from "@/utils/response/api"
import { NextRequest } from "next/server"

type CommentParams = {
  params: {
    postId?: string
  commentId?: string
  }
}

export async function DELETE(
  request: NextRequest,
  {params} : {params: {commentId: string}}
) {
  const supabase = await createClient()
  const { commentId } = await params
  try {
    const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId )

    if(error) return handleError("댓글 삭제를 실패했습니다")
    return handleSuccess("댓글 삭제가 완료되었습니다")
  } catch (error) {
    handleNetworkError()
    console.log(error)
  }
}

export async function PATCH(request: NextRequest, { params }: CommentParams) {
  const supabase = await createClient()
  const { postId, commentId } = await params
  const commentData = request.json()
  try {
    const { error, data } = await supabase
    .from("comments")
    .update(commentData)
    .eq("id", commentId)

    if(error) return handleError("댓글 수정을 실패하였습니다")
    return handleSuccess("게시글 수정이 완료되었습니다")
  } catch(error) {
    handleNetworkError()
    console.log(error)
  }
}