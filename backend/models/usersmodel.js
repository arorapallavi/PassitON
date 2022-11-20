const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	Name: { type : String, required:true},
    mailid:{ type : String, required:true},
    Semester: { type : String, required:true},
    Branch: { type : String, required:true},
    Campus: { type : String, required:true},
    Password:{ type : String, required:true},

})

module.exports = new mongoose.model("users",userSchema);