// const Resident = require("../models/residentModel");
const Apartment = require("../models/apartmentModel");

// exports.getApartments = async (req, res) => {
//   try {  
//       const apartments = await Apartment.find();
//       res.json(apartments);
//   } catch (err) {
//       res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
//   }
// }

// exports.getApartments = async (req, res) => {
//   try {  
//       const apartments = await Apartment.find();
//       res.json(apartments);
//   } catch (err) {
//       res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
//   }
// }


exports.getApartments = async (req, res) => {
  try {
    // Extract query parameters
    const { rooms, includes, area } = req.query;

    // Build the filter object based on query parameters
    const filter = {};

    if (rooms) {
      filter.rooms = rooms;
    }

    if (includes) {
      // Split the includes string into an array
      const includesArray = includes.split(',');

      // Use the $all operator to match all includes in the array
      filter.includes = { $all: includesArray };
    }

    // Fetch apartments based on the filter
    const apartments = await Apartment.find(filter);

    res.json(apartments);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
  }
};



// exports.getApartments = async (req, res) => {
//   try {
//     // Extract query parameters
//     const { rooms, includes, area } = req.query;

//     // Build the filter object based on query parameters
//     const filter = {};

//     if (rooms) {
//       filter.rooms = rooms;
//     }

//     if (includes) {
//       // Use the $in operator to filter apartments that have any of the selected amenities
//       filter.includes = { $in: Array.isArray(includes) ? includes : [includes] };
//     }

//     // Fetch apartments based on the filter
//     const apartments = await Apartment.find(filter);

//     res.json(apartments);
//   } catch (err) {
//     res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
//   }
// };

// exports.getApartments = async (req, res) => {
//   try {
//     // Extract query parameters
//     const { rooms, includes, area } = req.query;
//     // Build the filter object based on query parameters
//     const filter = {};
//     if (rooms) {
//       filter.rooms = rooms;
//     } else if (includes) {
//       filter.includes = includes; // Parse the includes parameter
//     }

//     // Fetch apartments based on the filter
//     const apartments = await Apartment.find(filter);

//     res.json(apartments);
//   } catch (err) {
//     res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
//   }
// };


exports.getApartment = async (req, res) => {
  try {  
    const { apartmentId } = req.params;
    const apartment = await Apartment.findById(apartmentId);
    res.json(apartment);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the apartment' });
  }
}

