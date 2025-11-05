import express from 'express';
import Booking from '../models/Booking.js';
const router=express.Router();
router.post('/', async(req,res)=>{res.json(await Booking.create(req.body));});
export default router;