const mongoose = require('mongoose');
const { Schema } = mongoose;

const residentSchema = new Schema({
  title:          { type: String, required: true },
  price:          { type: String, required: true },
  description:    { type: String, required: true },
  period:         { type: String, required: true },
  avalible:       { type: String, required: true },
  imageURL:       { type: Array, required: true },
  unitType:       { type: String, required: true },
  size:         { type: String, required: true },
  rooms:        { type: String, required: true },
  area:         { type: String, required: true },
  floor:        { type: String, required: true },
  city:         { type: String, required: true },
  street:       { type: String, required: true },
  zipcode:      { type: String, required: true },
  apply:        { type: String, required: true },
  includes:     { type: Array, required: true },
   

  })
  
  module.exports = mongoose.model('Resident', residentSchema)