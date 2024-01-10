import { IauthUser } from "../models/IauthTipes";

export interface credentialsRegisterTipe {
  email: string;
  name: string;
  password: string;
}
export interface credentialsLoginTipe {
  email: string;
  password: string;
}
export interface registerResponceDataType {
  token: string;
  user: IauthUser;
}
