import { createClient } from '@/supabase/server';
import { handleError, handleNetworkError, handleSuccess } from '@/utils/response/api';

export async function DELETE() {
  const supabase = await createClient()
  try{
    const { error } = await supabase.auth.signOut()
    if(error) return handleError("로그아웃에 실패하였습니다")
    return handleSuccess("로그아웃이 완료되었습니다")
  } catch {
    return handleNetworkError()
  }
}