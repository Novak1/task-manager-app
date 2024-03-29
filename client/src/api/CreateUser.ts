import { API_URL } from "./config";

export async function CreateUser(
  name: string,
  email: string,
  password: string
) {
  const response = await fetch(`${API_URL}/user`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  return response.json();
}
