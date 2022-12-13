export interface UserToken {
  accessToken?: string;
  user?: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    roles: string[];
  };
}
