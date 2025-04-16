import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const formData = await request.json()
  try{
    const { data, error } = await supabase
    .from("posts")
    .insert({
      team: formData.team,
    account: formData.account,
    author: formData.author,
    img_url: formData.img_url,
    price: formData.price,
    title: formData.title,
    usage_detail: formData.usage_detail,
    user_list: formData.user_list
    })

    if(error) {
      return handleError("등록에 실패하였습니다")
    }
    return handleSuccess(data, "등록 완료되었습니다")
  } catch (error) {
    console.log(error)
    return handleNetworkError()
  }
}