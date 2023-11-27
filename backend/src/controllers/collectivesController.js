const Collective = require("../models/collectiveModel");

exports.getCollectives = async (req, res) => {
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
    const collectives = await Collective.find(filter);

    res.json(collectives);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong when fetching the apartments' });
  }
};




exports.getCollective = async (req, res) => {
  try {  
    const { collectiveId } = req.params;
    const collective = await Collective.findById(collectiveId);
    res.json(collective);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the apartment' });
  }
}

