const mongoose = require('mongoose')

mongoose.connect("<serverconnectionlink>")
.then(()=>console.log("db connected"));