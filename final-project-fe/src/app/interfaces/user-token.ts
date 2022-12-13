export interface UserToken {
  accessToken?: string;
  user?: {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
  };
}
