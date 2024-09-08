export interface User {
  username: string;
  password: string;
  email: string;
  id?: string;
}

export interface UserProjection {
  _id: number;
  username: number;
}
