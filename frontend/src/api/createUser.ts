import { API_URL } from "./config";
import { getToken } from "../utils/auth"; // Define a function to retrieve the token

export async function createUser(firstName: string, lastName: string, email: string, password: string): Promise<TUser> {
  const token = getToken(); // Implement a function to retrieve the token from localStorage

  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });
  return response.json();
}

