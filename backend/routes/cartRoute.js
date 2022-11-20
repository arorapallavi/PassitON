const router = require('express').Router();
const cartModel = require('../models/cartmodel');


//post request
router.post('/cart',async(req,res)=>{
	try {
		const data = req.body;
		const newitem = new cartModel(data);
		await newitem.save().then(()=>{
			res.status(200).json({message:"Book added"});
		});
		
 	}catch(error){
		console.log(error);
	}
})