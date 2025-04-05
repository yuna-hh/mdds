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

export type PostDataType = {
  account: string;
  author: string;
  created_at: string
  id: string;
  price: number;
  team: string;
  teams: {team: string};
  title: string;
  usage_detail: string;
  user_list: string;
}