const express  = require('express');
const app = express();
const bookRoute = require("./routes/booksRoute");
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
require("./connection/conn");

//routes
/*
app.get('/',(req,res) =>{
	res.send('Hello');
});
*/

app.use(express.json());
app.use('/api/v1',bookRoute);

app.listen(4000,()=>{
	console.log("port running on 4000");
});