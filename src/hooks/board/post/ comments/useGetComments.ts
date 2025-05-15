"use client"

import { getComments } from '@/service/post'
import { CommentsResponseType } from '@/types/post'
import { useQuery } from '@tanstack/react-query'

export function useGetComments(postId: string) {
  const {data = [], isPending, isError } = useQuery<CommentsResponseType[]>({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  })
  return {data, isPending, isError}
}