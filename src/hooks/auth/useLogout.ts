import { logout } from '@/service/auth';
import { authStore } from '@/zustand/authStore';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'
import { Notify } from 'notiflix';


export function useLogout() {
  const { saveUser } = authStore()
  const queryClient = useQueryClient()
  const router = useRouter()
  const handleLogout = async() => {
    const response = await logout()
    if(response.message === "로그아웃에 실패하였습니다") {
      Notify.failure("잠시후 다시 시도해주세요")
    }
      saveUser(null)
      queryClient.clear()
      router.replace("/")
      Notify.success("로그아웃이 완료되었습니다")
  }
  return handleLogout
}