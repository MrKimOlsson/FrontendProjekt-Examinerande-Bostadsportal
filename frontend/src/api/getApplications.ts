import { API_URL } from "./config";

export async function getApplications(): Promise<TUserApplicationsRes[]> {
  const response = await fetch(`${API_URL}/applications`);
  return response.json();
}