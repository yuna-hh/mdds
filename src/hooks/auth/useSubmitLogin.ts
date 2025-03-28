import { handleLogin } from '@/service/auth'
import { LoginType } from '@/types/auth'
import { useRouter } from 'next/navigation'


export function useSubmitLogin () {
  const router = useRouter()
   const handleSubmitLogin = async(data: LoginType) => {
   const response = await handleLogin(data)
   if(response.message === "로그인에 실패하셨습니다") {
    return console.log("이메일 또는 비밀번호를 확인해주세요")
   }
    router.push("/")
  }
  return handleSubmitLogin
}