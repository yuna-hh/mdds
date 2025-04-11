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
  data: PostListType[];
  count: number;
  page: number;
  limit: number;
}

// export type PostDataType = {
//   account: string;
//   author: string;
//   created_at: string
//   id: string;
//   price: number;
//   team: string;
//   teams: {team: string};
//   title: string;s
//   usage_detail: string;
//   user_list: string;
// }

export type PostResponseType = Tables<"posts"> & Pick <Tables<"teams">,"team">

export type PostRequestType = Omit <Tables<"posts">,"created_at" | "id">

export type TeamsType = Tables<"teams">