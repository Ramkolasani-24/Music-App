import express from 'express';
import Place from '../models/Place.js';
const router=express.Router();

router.get('/', async(req,res)=>{res.json(await Place.find());});
router.post('/', async(req,res)=>{res.json(await Place.create(req.body));});

export default router;