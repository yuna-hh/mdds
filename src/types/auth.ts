export type JoinDataType = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone?: string;
};

export type LoginType = {
  email: string;
  password: string;
}