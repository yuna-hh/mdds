import { handleJoin } from '@/service/auth'
import { JoinDataType } from '@/types/auth'
import { useRouter } from 'next/navigation'
import { Notify } from 'notiflix'


export function useSubmitJoin() {
  const router = useRouter()
  const handleSubmitJoin = async(data: JoinDataType) => {
    const {passwordConfirm, ...joinData} = data // eslint-disable-next-line react-hooks/exhaustive-deps
    const response = await handleJoin(joinData)
    if(response.message === "회원가입에 실패하였습니다") {
      return Notify.failure("이미 가입된 이메일 입니다")   
    }
    Notify.success("회원가입이 완료되었습니다")
    router.push("/login")
  }
  return handleSubmitJoin
}