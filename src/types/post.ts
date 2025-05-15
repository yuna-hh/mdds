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

export type PostResponseType = Tables<"posts"> & { teams: Pick <Tables<"teams">,"team"> }

export type PostRequestType = Omit <Tables<"posts">,"created_at" | "id">

export type TeamsType = Tables<"teams">

export type CommentsResponseType = Tables<"comments"> & {author: Pick<Tables<"user">, "name">}

// export type PostResponseType = {
//   account: string;
//     author: string | null;
//     created_at: string;
//     id: string;
//     img_url: string | File;
//     price: number;
//     team: string;
//     title: string;
//     usage_detail: string;
//     user_list: string;
//     teams: {team: string};
// }