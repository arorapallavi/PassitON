import React from "react";
import "./uploadform.css";
import {useState} from "react"
import axios from 'axios'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Uploadform(){
	
	const [Data,setData] = useState(
	{
	name: "",
    edition:0 ,
    author: "",
    condition: "",
    costprice:0 ,
    sellingprice:0,
    image: ""
		})
		const change=(e)=>
		{
			const {name,value}=e.target
			setData({...Data,[name]:value})
		}
	
	const submit = async(e)=>{
		e.preventDefault();
		 await axios
		 .post("http://localhost:4000/api/upload",Data)
		 .then(function (response) {
            if (response.data.redirect == '/') {
                window.location = "/display"
            } else if (response.data.redirect == '/uploadbook'){
                window.location = "/uploadbook"
            }
        })
        .catch(function(error) {
            window.location = "/login"
        })
		 setData(
		 {
			name: "",
			edition:0 ,
			author: "",
			condition: "",
			semester:0 ,
			costprice:0 ,
			sellingprice:0,
			isbn:0,
			image: ""
				}
		 )
	}
	console.log(Data);
	return(
	       <form className="home-form">
          <span className="home-text">Upload Book Details</span>
          <label className="home-text01">Book Name :&nbsp;</label>
          <textarea
            placeholder="name of book"
            className="home-textarea textarea"
			name="name"
			value = {Data.name}
			onChange={change}
          ></textarea>
          
          <label className="home-text02">Edition :&nbsp;</label>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput input"
			name="edition"
			value = {Data.edition}
			onChange={change}
			
          />
          <label className="home-text03">Author :&nbsp;</label>
          <textarea
            placeholder="author"
            className="home-textarea1 textarea"
			name="author"
			value = {Data.author}
			onChange={change}	
          ></textarea>
          <label className="home-text04">
            <span className="home-text05">Publisher :&nbsp;</span>
         </label>
          <textarea
            placeholder="publisher"
            className="home-textarea2 textarea"
			name="publisher"
			value = {Data.publisher}
			onChange={change}
          ></textarea>
          <label className="home-text07">Condition :&nbsp;</label>
          <select className="home-select" name="condition" value = {Data.condition} onChange={change}>
            <option value="new">As New</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          <label className="home-text08">
            <span className="home-text09">Semester</span>
            <span>:&nbsp;</span>
          </label>
          <select className="home-select1" name="semester" value = {Data.semester} onChange={change}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <label className="home-text11">
            <span>Cost Price :&nbsp;</span>
          </label>
          <input
            type="text"
            placeholder="cost price"
            className="home-textinput1 input"
			name="costprice"
			value = {Data.costprice}
			onChange={change}
          />
          <label className="home-text15">Selling Price :&nbsp;</label>
          <input
            type="text"
            placeholder="sellingprice"
            className="home-textinput2 input"
			name="sellingprice"
			value = {Data.sellingprice}
			onChange={change}
          />
          <label className="home-text16">
            <span className="home-text17">ISBN Number :&nbsp;</span>
          </label>
          <input
            type="text"
            placeholder="isbn number"
            className="home-textinput3 input"
			name="isbn"
			value = {Data.isbn}
			onChange={change}
          />
          <label className="home-text19">
            <span className="home-text20">Image</span>
            <span>:&nbsp;</span>
          </label>
          <input
            type="text"
            placeholder="enter image url"
            className="home-input input"
			name="image"
			value = {Data.image}
			onChange={change}
          />
		 < button className="home-button button" value="Submit" onClick={submit}>Submit</button>
        </form>
	);
};


function Uploadbook()
{
	return(
	<div>
	<Navbar/>
	<Uploadform/>
	<Footer/>
	</div>
	);
}

export default Uploadbook;