import { API_URL } from "./config";

export async function deleteUser(_id: string) {
  await fetch(`${API_URL}/user/${_id}`, {
    method: "DELETE",
  });
}
