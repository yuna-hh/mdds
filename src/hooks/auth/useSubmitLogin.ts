import { handleLogin } from '@/service/auth'
import { LoginType } from '@/types/auth'
import { authStore } from '@/zustand/authStore'
import { useRouter } from 'next/navigation'
import { Notify } from 'notiflix'


export function useSubmitLogin () {
  const router = useRouter()
  const { saveUser } = authStore()
   const handleSubmitLogin = async(data: LoginType) => {
   const response = await handleLogin(data)
   if(response.message === "로그인에 실패하셨습니다") {
    return Notify.warning("이메일 또는 비밀번호를 확인해주세요")
   }
   saveUser(response.data.user)
   Notify.success("로그인이 완료되었습니다")
  router.replace("/")

  }
  return handleSubmitLogin
}