import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest) {
  const supabase = await createClient()
  try{
    const {data, error} = await supabase
    .from("teams")
    .select(`*`)
    if(error) return handleError("데이터를 불러오는데 실패하였습니다")
    return handleSuccess(data)
  } catch(error) {
    console.log(error)
    return handleNetworkError()
  }
}
