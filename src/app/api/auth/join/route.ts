import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  try{
    const { email, password, name, phone } = await request.json()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          phone: phone || null
        }
      }
    })
    if(error) return handleError("회원가입에 실패하였습니다")
    
    const { error: userError } = await supabase.from("user").insert({
      id: data.user?.id,
      name,
      phone
    })

    if(userError) return handleError(userError.message)
    return handleSuccess("회원가입이 완료되었습니다")
  } catch (error) {
    console.log(error)
    return handleNetworkError()
  }
}