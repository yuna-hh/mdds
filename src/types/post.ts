import { Tables } from './supabase';
export type PostListType = {
  id: string;
  title: string;
  author: string | null;
  created_at: string;
  teams: {
    team: string;
    id: string;
  }
  user: {
    name: string;
  }
}

export type PostListData = {
  count: number;
  data: PostListType[];
  limit: number;
  page: number;
}

export type PostResponseType = Tables<"posts"> & { teams: Pick <Tables<"teams">,"team"> }

export type PostRequestType = Omit <Tables<"posts">,"created_at" | "id">

export type TeamsType = Tables<"teams">