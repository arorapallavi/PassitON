import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Book_details.css";
import axios from 'axios'


let bookImage = require('./book_demo.jpg')
const BookDet = () =>{
	var bid=useParams().id
	
const [Data,setData] = useState([
	{
	name: "",
    edition:0 ,
    author: "",
    condition: "",
    semester:0 ,
    costprice:0 ,
    sellingprice:0,
    isbn:0 ,
    image: ""
	}]);
	
	
			
			console.log("in use effect")
		console.log(bid)
		fetch(`http://localhost:4000/api/display/${bid}`).then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes))
		
	
	console.log("data")
	console.log(Data)
	const submit = async(e)=>{
		e.preventDefault();
		 await axios
		 .post("http://localhost:4000/api/addtocart",Data)
		 .then(function (response) {
            if (response.data.redirect == '/') {
                window.location = "/display"
            }
            
        })
        .catch(function(error) {
           console.log(error)
        })
	}
	
    return(
        <div>
	

          <img
             src={Data.image}
            alt="image"
            className="book-image"/>
            <div className = "info">
                <h3>Details</h3>
                <p>Name: {Data.name}</p>
                <p>Edition: </p>
                <p>Author:</p>
                <p>Condition: </p>
                <p>Semester: </p>
                <p>Price</p>
                <p>ISBN:</p>
                <p>Description: </p>  
            </div>  
            <button className="Tocart" onClick={submit}>Add To Cart</button>  
			<br/><Link to="/display"><button> Go back to display all books</button></Link>	
	
        </div>
    )};

export default BookDet;
