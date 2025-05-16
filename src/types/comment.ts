import { Tables } from './supabase';

export type CommentsResponseType = Tables<"comments"> & {user: Pick<Tables<"user">, "name">}

export type CommentsRequestType = Omit <Tables<"comments">, "created_at" | "id">