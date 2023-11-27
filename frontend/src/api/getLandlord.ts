import { API_URL } from "./config";

export async function getLandlord(id: string): Promise<TLandlordRating> {

    const response = await fetch(`${API_URL}/landlords/${id}`);
    return response.json();
  }