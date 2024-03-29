import { API_URL } from "./config";

export type TUser = {
  name: string;
  email: string;
  password: string;
  _id: string;
};

export async function GetAllUser(): Promise<TUser[]> {
  const response = await fetch(`${API_URL}/user`);
  return response.json();
}
