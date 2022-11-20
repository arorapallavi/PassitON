import React from 'react';
import './login.css';
import {Link} from "react-router-dom";
import axios from 'axios' ;

import {useState} from "react"
const img1 = require('./pass_it_on.jpeg')
const img2 = require('./img2.jpg')
const Login = () => {
      	const [Data,setData] = useState( { 	Name: "",   Password:"" })
		const change=(e)=>
		{
			const {name,value}=e.target
			setData({...Data,[name]:value})
		}
	
        
        const submit = async(e)=>{
                 e.preventDefault();
             await axios
             .post("http://localhost:4000/api/login",Data)
             .then((res) => console.log(res));
             setData(
             {
                Name: "",
                Password:"" 
    
            })
                }
				 console.log(Data);  
        return(
                <div>
                         <h2 style = {{color:'#353535',fontSize:80,fontFamily: 'cursive',textAlign:'left',marginBottom: 0,}}>Log In</h2>
                         <img className="img1" src = {img1} />
                         <hr/>
                        <div style = {{backgroundColor:"#d9d9d9",marginLeft: 100}}>
                        <img className = "img2" align="right" src ={img2}/>
                        </div>
                        <form style = {{color:'#353535',fontFamily: "cursive",fontSize: "x-large",marginLeft: 100}} method="POST">
                            <h3>Enter your username:<br/><input type = "textbox" id = "username" onChange={change} className="tb1" name = "Name" value={Data.Name}/></h3>
                            <h3>Enter password:<br/><input type = "password" id = "password" onChange={change} className="tb1" name = "Password" value = {Data.Password}/></h3>
                            <h3><button type = "submit" id = "mysubmit" onClick = {submit}  className="b3">Login</button></h3>
                            <h3>Do not have an account? </h3>
                            <Link className = "b2" to = "/signup"><span>Signup</span></Link>
                        </form>
	                
                </div>
                 )
}

export default Login;