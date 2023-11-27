const Landlord = require("../models/landlordModel");

exports.getLandlord = async (req, res) => {
    try {  
      const { landlordId } = req.params;
      const landlord = await Landlord.findById(landlordId);
      res.json(landlord);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when fetching the apartment' });
    }
  }
  