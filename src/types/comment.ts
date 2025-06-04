import { Tables } from './supabase';

export type commentListData = {
  count: number,
  data: CommentsResponseType[]
  limit: number
  page: number,
}

export type CommentsResponseType = Tables<"comments"> & {user: Pick<Tables<"user">, "name">}

export type CommentsRequestType = Omit <Tables<"comments">, "created_at" | "id">

export type CommentParamsType = {
  params: Promise<{ commentId: string }>
}