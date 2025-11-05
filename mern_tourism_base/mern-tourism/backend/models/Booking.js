import mongoose from 'mongoose';
const BookingSchema=new mongoose.Schema({
 name:String,email:String,phone:String,
 destination:String, date:String
});
export default mongoose.model('Booking',BookingSchema);