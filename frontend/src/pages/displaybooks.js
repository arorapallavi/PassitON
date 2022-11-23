import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";
import BookCard from '../components/card'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Displayall = () =>{
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
	useEffect(()=> {
		
		fetch("http://localhost:4000/api/display").then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	})
	
	
	return(
		<>
		<Container style={{ top: '131px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute'}}>
		
		<Row sm="3">
		{Data.map((book)=>(
		
			<Col className="d-flex" >
			<BookCard className="flex-fill" book={book} />
			</Col>
			
		))}
		
		</Row>
		</Container>
		
			
		</>
	);
};

function Displaybook()
{
	return(
	<div style={{  marginBottom: '50px'}}>
	<Navbar/>
	<Displayall/>
	<Footer/>
	</div>
	);
}

export default Displaybook;