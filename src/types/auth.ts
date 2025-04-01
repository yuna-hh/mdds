export type JoinDataType = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone?: string;
  policy: boolean;
};

export type LoginType = {
  email: string;
  password: string;
}