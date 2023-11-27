import { API_URL } from "./config";

export async function getUserApplications(userId: string): Promise<TUserApplicationsRes> {
  try {
    const response = await fetch(`${API_URL}/applications/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response Data:", data); // Log the response data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching user applications:", error);
    throw error;
  }
}
