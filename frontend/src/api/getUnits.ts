import { API_URL } from "./config";

export async function getUnits(unitType: string): Promise<TResidentialUnit[]> {
  const response = await fetch(`${API_URL}/${unitType}s`);
  return response.json();
}

export async function getFilteredUnits(
  unitType: string,
  selectedFilters: any
): Promise<TResidentialUnit[]> {
  const { selectedRooms, amenities, lowestCost, highestCost } = selectedFilters;

  try {
    // Construct the URL with query parameters based on the selected filters
    const queryParams = new URLSearchParams({
      selectedRooms: selectedRooms.toString(),
      amenities: amenities.join(','), // Convert amenities array to a comma-separated string
      lowestCost,
      highestCost,
    });

    const response = await fetch(`${API_URL}/${unitType}s?${queryParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("response data");
    console.log(data); // Debugging: Log the response data

    if (!data || data.length === 0) {
      console.log("No matching units found."); // Debugging: Log a message if no units are found
      return [];
    }

    // Filter the units based on amenities, selectedRooms, and rent after fetching the data
    const filteredUnits = data.filter((unit: TResidentialUnit) => {
      const rent = unit.rent;
      const unitAmenities = unit.includes || []; // Assuming amenities are stored in the "includes" property
      const unitRooms = unit.rooms;

      // Check if all selected amenities are present in the unit's amenities
      const allAmenitiesSelected =
        !amenities.length || amenities.every((amenity: any) =>
          unitAmenities.includes(amenity)
        );

      // Check if the number of rooms matches the selectedRooms
      const roomsMatch =
        selectedRooms === 0 || unitRooms === selectedRooms;

      // Check if rent is within the specified range
      const rentInRange =
        (!lowestCost || !highestCost || (rent >= parseInt(lowestCost, 10) && rent <= parseInt(highestCost, 10)));

      return allAmenitiesSelected && roomsMatch && rentInRange;
    });

    return filteredUnits;
  } catch (error) {
    console.error("Error filtering units:", error);
    throw error;
  }
}





// export async function getFilteredUnits(
//   unitType: string,
//   selectedFilters: any,
  // lowestCost: string,
  // highestCost: string
// ): Promise<TResidentialUnit[]> {
//   const { selectedRooms, amenities } = selectedFilters;

//   try {
//     const response = await fetch(`${API_URL}/${unitType}s`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log("response data");
//     console.log(data); // Debugging: Log the response data

//     if (!data || data.length === 0) {
//       console.log("No matching units found."); // Debugging: Log a message if no units are found
//       return [];
//     }

//     // Filter the units based on amenities, selectedRooms, and rent after fetching the data
//     const filteredUnits = data.filter((unit: TResidentialUnit) => {
//       const rent = parseInt(unit.rent, 10);
//       const unitAmenities = unit.includes || []; // Assuming amenities are stored in the "includes" property
//       const unitRooms = unit.rooms;

//       // Check if all selected amenities are present in the unit's amenities
//       const allAmenitiesSelected = amenities.every((amenity: any) =>
//         unitAmenities.includes(amenity)
//       );

//       // Check if the number of rooms matches the selectedRooms
//       const roomsMatch = unitRooms === selectedRooms;

//       // Check if rent is within the specified range
//       const rentInRange = rent >= parseInt(lowestCost, 10) && rent <= parseInt(highestCost, 10);

//       return allAmenitiesSelected && roomsMatch && rentInRange;
//     });

//     return filteredUnits;
//   } catch (error) {
//     console.error("Error filtering units:", error);
//     throw error;
//   }
// }



