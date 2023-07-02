export interface User {
  email: string;
  name: string;
  password: string;
  avatarImg: string;
  __v: number;
  _id: string;
}

export interface SignUpData {
  name: string;
  password: string;
  email: string;
  avatarImg: string;
}

export interface LoginData {
  email: string;
  password: string;
}
