const mongoose = require('mongoose');
const { Schema } = mongoose;

const landlordSchema = new Schema({
    name:          { type: String, required: true },
    ratings:          { type: Array, required: true },   
  })

module.exports = mongoose.model('Landlord', landlordSchema)