const router = require('express').Router();
const cartModel = require('../models/cartmodel');


//post request
router.post('/addtocart',async(req,res)=>{
	try {
		const data = req.body;
		const newitem = new cartModel(data);
		await newitem.save().then(()=>{
			res.status(200).json({message:"Item added"});
		});
		
 	}catch(error){
		console.log(error);
	}
})


router.get('/cart', (req,res) => {
	try{
		cartModel.find().then(founditems=>res.json(founditems));
	
	}
	catch(error){
	console.log(error);
	}
})
module.exports = router ;

router.get('/cart/:id',async(req,res) =>{
	let books;
	try{
		bookModel.findById(id).project({'name':1,'author':1,'costprice':1,'sellingprice':1,'image':1}).then(foundbook=>res.json(foundbook));
	
	}
	catch(error){
	console.log(error);
	}
})