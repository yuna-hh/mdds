"use client"

import { getComments } from '@/service/comment'
import { CommentsResponseType } from '@/types/comment'
import { useQuery } from '@tanstack/react-query'

export function useGetComments(postId: string) {
  const {data = [], isPending, isError } = useQuery<CommentsResponseType[]>({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  })
  return {data, isPending, isError}
}