import { API_URL } from "./config";

export async function loginUser(email: string, password: string): Promise<TUser> {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
}