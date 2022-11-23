import {Link} from "react-router-dom";

import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";
import BookCard from '../components/card'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const search_icon = require("./search_icon.png")

const Search = () =>{
	

		
	const [sem, setSearchTerm] = useState("")

	
		const change=(e)=>
		{
		
			console.log("target val")
      		 console.log(e.target.value)
			setSearchTerm(e.target.value)
		}
				console.log("sem")
      		 console.log(sem)
	
	return(
	   
		<div style={{ top: '131px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute'}}>
	
        <input    id="search" type="number"  placeholder="Search book by semester"     name="sem" onChange =  {change}  style={{fontSize:'30px'}}/>
		<img src={search_icon} style={{width:'40px', height:'40px' ,paddingLeft:'10px'}}/>
		
		 		 <Link to={'searchres/' + sem} >< button className = "b2" style={{fontSize:'30px'}} >Search</button></Link>

		
			
		</div>
		 

	);
};


function Searchbook()
{
	return(
	<div>
	<Navbar/>
	<Search/>
	<Footer/>
	</div>
	);
}

export default Searchbook;