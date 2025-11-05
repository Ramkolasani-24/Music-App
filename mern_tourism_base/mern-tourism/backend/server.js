import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import placeRoutes from './routes/places.js';
import bookingRoutes from './routes/bookings.js';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/places', placeRoutes);
app.use('/api/book', bookingRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected'));

app.listen(5000,()=>console.log('Server running on 5000'));