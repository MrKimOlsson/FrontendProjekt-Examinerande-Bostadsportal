import { API_URL } from "./config";

export async function deleteApplication(userId: string | null, applicationId: string): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/applications/${userId}/units/${applicationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Include any necessary authorization headers if required.
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    console.log("The application has been deleted");

    // Refresh the page
    window.location.reload();
  } catch (error) {
    console.error("Error deleting application:", error);
    throw error;
  }
}
