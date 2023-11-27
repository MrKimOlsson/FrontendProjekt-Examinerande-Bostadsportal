import { API_URL } from "./config";

export async function createApplication(userId: string, unit: TResidentialUnit): Promise<TNewApplication> {
  try {
    const response = await fetch(`${API_URL}/applications/add`, {
      method: "POST",
      body: JSON.stringify({
        userId,
        unit, // Pass the entire unit object
      }),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error creating application:", error);
    throw error;
  }
}

