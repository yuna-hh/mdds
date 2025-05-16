import { Tables } from './supabase';

export type CommentsResponseType = Tables<"comments"> & {user: Pick<Tables<"user">, "name">}

export type CommentsRequestType = Tables<"comments">