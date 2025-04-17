import { getCategory } from '@/service/post'
import { TeamsType } from '@/types/post'
import { useSuspenseQuery } from '@tanstack/react-query'

export function useGetCategory() {
  const { data } = useSuspenseQuery<TeamsType[]>({
    queryKey: ["category"],
    queryFn: getCategory
    
  })

  return { data }
}