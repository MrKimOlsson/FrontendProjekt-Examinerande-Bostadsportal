import { API_URL } from "./config";

export async function getLoggedInUser(): Promise<TUser> {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}