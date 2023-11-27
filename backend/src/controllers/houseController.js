const House = require("../models/houseModel");

exports.getHouses = async (req, res) => {
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
      const houses = await House.find();
      res.json(houses);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the houses' });
  }
}

exports.getHouse = async (req, res) => {
  try {  
    const { houseId } = req.params;
    const house = await House.findById(houseId);
    res.json(house);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the house' });
  }
}



