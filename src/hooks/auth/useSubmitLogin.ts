import { handleLogin } from '@/service/auth'
import { LoginType } from '@/types/auth'
import { useRouter } from 'next/navigation'
import { Notify } from 'notiflix'


export function useSubmitLogin () {
  const router = useRouter()
   const handleSubmitLogin = async(data: LoginType) => {
   const response = await handleLogin(data)
   if(response.message === "로그인에 실패하셨습니다") {
    return Notify.warning("이메일 또는 비밀번호를 확인해주세요")
   }
   Notify.success("로그인이 완료되었습니다")
    router.push("/")
  }
  return handleSubmitLogin
}