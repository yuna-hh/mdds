import { handleJoin } from '@/service/auth'
import { JoinDataType } from '@/types/auth'
import { useRouter } from 'next/navigation'


export const useSubmitJoin = () => {
  const router = useRouter()
   const handleSubmitJoin = async(data: JoinDataType) => {
    const {passwordConfirm, ...joinData} = data
    await handleJoin(joinData)
    router.push("/")
  }
  return handleSubmitJoin
}