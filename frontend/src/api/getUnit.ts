import { API_URL } from "./config";

export async function getUnit(unitId: string, unitType: string): Promise<TResidentialUnit> {
    console.log('get units unit type: '+ unitType)
    console.log('get units unit Id: '+ unitId)
    const response = await fetch(`${API_URL}/${unitType}s/${unitId}`);
    return response.json();
  }