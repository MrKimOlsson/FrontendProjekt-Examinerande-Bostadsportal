import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CabinSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
    avalible: String,
    imageURL: Array,
    unitType: String,
})

const CabinModel = mongoose.model('Cabin', CabinSchema);

export default CabinModel