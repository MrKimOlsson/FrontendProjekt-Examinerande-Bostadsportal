const mongoose = require('mongoose');
const { Schema } = mongoose;

// { type: Schema.Types.ObjectId, unique: true }
const applicationSchema = new Schema({
    userId:          { type: String, required: true },
    units:          { type: Array, required: true },
  })

module.exports = mongoose.model('Application', applicationSchema)