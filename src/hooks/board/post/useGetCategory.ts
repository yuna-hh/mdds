import { getCategory } from '@/service/post'
import { TeamsType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

export function useGetCategory() {
  const { data, isPending, isError} = useQuery<TeamsType[]>({
    queryKey: ["category"],
    queryFn: getCategory
  })

  return { data, isPending, isError}
}
