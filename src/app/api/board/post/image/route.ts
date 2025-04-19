import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function POST (request: NextRequest) {
  const supabase = createClient()
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    const fileExtension = file.type.slice(6)
    const fileName = `board_${Date.now()}.${fileExtension}`
    const { data: imageData, error: imageError } = await (await supabase).storage
    .from("board")
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })

    if(imageError) {
      console.log(imageError)
      return handleError("이미지 등록을 실패하였습니다")
    }
    return handleSuccess(imageData.path)
  } catch (error) {
    console.log(error)
    return handleNetworkError()
  }
}
