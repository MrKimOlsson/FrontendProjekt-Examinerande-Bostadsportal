const Room = require("../models/roomModel");

exports.getRooms = async (req, res) => {
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

      const roomsUnits = await Room.find();
      res.json(roomsUnits);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the houses' });
  }
}

exports.getRoom = async (req, res) => {
  try {  
    const { roomId } = req.params;
    const room = await Room.findById(roomId);
    res.json(room);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the room' });
  }
}
