const router = require('express').Router();
const userModel = require('../models/usersmodel');


//post request
router.post('/signup',async(req,res)=>{
	try {
		const data = req.body;
		const newuser = new userModel(data);
		await newuser.save().then(()=>{
			res.status(200).json({message:"User added"});
		});
		
 	}catch(error){
		console.log(error);
	}
})

router.post('/login',async(req,res)=>{
		try{
		const username = req.body.Name
		const password = req.body.Password
		console.log(username)
		user =  await userModel.findOne({Name:username ,Password:password}).exec();
		console.log(user)
		if(user!=null )
		{
			console.log("exists")
			
		}
		}catch(error)
		{
			console.log(error)
		}
	
		})
	


module.exports = router ;