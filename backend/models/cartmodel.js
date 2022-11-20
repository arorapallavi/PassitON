const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	name: { type : String, required:true},
	edition:{ type : Number, required:true},
	author: { type : String, required:true},
	pubisher: { type : String},
	condition: { type : String, required:true},
	costprice : { type : Number , required:true},
	sellingprice : { type : Number , required:true},
	image : { type : String , required:true}
})

module.exports = new mongoose.model("cart",cartSchema);