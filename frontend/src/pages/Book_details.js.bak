import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Book_details.css";



let bookImage = require('./book_demo.jpg')
const BookDet = () =>{
    return(
        <div>
          <img
             src={bookImage}
            alt="image"
            className="book-image"
          />
            <div class = "info">
                <h3>Details</h3>
                <p>Name: </p>
                <p>Edition: </p>
                <p>Author:</p>
                <p>Condition: </p>
                <p>Semester: </p>
                <p>Price</p>
                <p>ISBN:</p>
                <p>Description: </p>  
            </div>  
            <button className="Tocart" value="addToCart">Add To Cart</button>  
			<br/><Link to="/display"><button> Go back to display all books</button></Link>			
        </div>
    )
};

export default BookDet;
