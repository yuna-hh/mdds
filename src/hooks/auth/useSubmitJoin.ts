import { handleJoin } from '@/service/auth'
import { JoinDataType } from '@/types/auth'
import { useRouter } from 'next/navigation'


export function useSubmitJoin() {
  const router = useRouter()
  const handleSubmitJoin = async(data: JoinDataType) => {
    const {passwordConfirm, ...joinData} = data
    const response = await handleJoin(joinData)
    if(response.message === "회원가입에 실패하였습니다") {
      return console.log("이미 가입된 이메일 입니다")
    }
    router.push("/")
  }
  return handleSubmitJoin
}