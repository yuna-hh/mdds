import { getCategory } from '@/service/post'
import { useQuery } from '@tanstack/react-query'

export const useGetCategory = () => {
  const { data, isPending, isError} = useQuery({
    queryKey: ["category"],
    queryFn: getCategory
  })

  return { data, isPending, isError}
}
