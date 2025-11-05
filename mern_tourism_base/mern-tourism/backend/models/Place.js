import mongoose from 'mongoose';
const PlaceSchema=new mongoose.Schema({
 title:String,
 category:String,
 image:String,
 description:String,
 price:Number
});
export default mongoose.model('Place',PlaceSchema);