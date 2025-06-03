import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  try{
    const { email, password} = await request.json()
    const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if(data.session === null) return handleError("로그인에 실패하셨습니다")
        if(error) return handleError("로그인에 실패하셨습니다")
      
          return handleSuccess(data, "로그인 되셨습니다")
  } catch (error) {
    console.log(error)
    return handleNetworkError()

  }
}