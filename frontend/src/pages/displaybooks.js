import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import BookCard from '../components/card'
const Displaybook = () =>{
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
		<Container>
		<Row>
		
		{Data.map((book)=>(
		<Col md={4}>
			<BookCard book={book}/>
			</Col>
		))}
		</Row>
		</Container>
		
			
		</>
	);
};

export default Displaybook;