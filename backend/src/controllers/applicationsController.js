const Application = require("../models/applicationModel");


exports.getApplications = async (req, res) => {
  try {  
      const applications = await Application.find();
      res.json(applications);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the applications ' });
  }
}

exports.getApplication = async (req, res) => {
  try {  
    const { applicationId } = req.params;
    const application = await Application.findById(applicationId);
    res.json(application);
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the application' });
  }
}

exports.addApplication = async (req, res) => {
    const { unit, userId } = req.body;
  
    if (!unit || !userId) {
      return res.status(400).json({
        message: 'Parameters are missing'
      });
    }
  
    try {
      // Check if an application exists with the same _id as userId
      const existingApplication = await Application.findById(userId);
  
      if (existingApplication) {
        // Check if the unit already exists in the units array
        const unitExists = existingApplication.units.some(existingUnit => existingUnit._id === unit._id);
  
        if (unitExists) {
          return res.status(400).json({
            message: 'Du har redan skickat en ansökan' // User-friendly message
          });
        }
  
        // If the unit doesn't exist, push it into the units array
        existingApplication.units.push(unit);
        await existingApplication.save();
      } else {
        // If no application with the same _id exists, create a new application document
        const newApplication = new Application({
          _id: userId, // Set _id to userId
          userId,
          units: [unit] // Create a new array with the unit
        });
        await newApplication.save();
      }
  
      res.status(201).json({ message: 'Ansökan skapad framgångsrikt' }); // Success message
    } catch (error) {
      console.error('Error creating application:', error);
      res.status(500).json({ error: 'Internt serverfel' }); // Internal server error message
    }
  };
  
  exports.addAdmin = async (req, res) => {
    try {
      const { adminId } = req.body;
  
    if(!adminId) {
      return res.status(400).json({ message: 'You need to enter a admin Id' })
    }
  
    const admin = await Admin.create({ adminId })
  
    if(!admin) {
      return res.status(500).json({ message: 'Something went wrong '})
    }
  
    res.status(201).json({ message: 'Admin added, you need to login again for it to work'})
    } catch (err) {
      if(err.code == 11000) {
        return res.status(400).json({ message: 'this admin already exists'})
      }
    }
  }



  exports.deleteUnitFromApplication = async (req, res) => {
    try {
      const { userId, applicationId } = req.params;
      console.log("user ID")
      console.log(userId)
  
      // Find the application by ID
      const application = await Application.findById(userId);
  
      if (!application) {
        console.log("application not found")
        return res.status(404).json({ message: 'Application not found' });
      }
  
      // Find the index of the unit with the matching unitId in the units array
      console.log("application id:")
      console.log(applicationId)
      const unitIndex = application.units.findIndex(unit => unit._id === applicationId);
  
      if (unitIndex === -1) {
        return res.status(404).json({ message: 'Unit not found in the application' });
      }
  
      // Remove the unit from the units array
      application.units.splice(unitIndex, 1);
  
      // Save the updated application
      await application.save();
      console.log("Application has been deleted")
      res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
      console.error('Error deleting unit from application:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };