import React from 'react';
import './signup.css';
import {Link} from "react-router-dom";

import {useState} from "react"
import axios from 'axios'
const logo = require('./pass_it_on.jpeg')
const img4 = require('./img4.jpeg')
const bgimg = require('./bg.jpeg')
const Signup = () => {

    const [Data,setData] = useState(
        {
        Name: "",
        mailid:"" ,
        Semester: "",
        Branch: "",
        Campus:"" ,
        Password:"" 
    
         })
        const change=(e)=>
        {
            if (
                document.getElementById('password').value ==
                document.getElementById('confirmpass').value) 
                {
              
                document.getElementById("mysubmit").disabled=false;
               
                }
                else {
   
   
      document.getElementById("mysubmit").disabled=true;}
            
            const {name,value}=e.target
            setData({...Data,[name]:value})
        }
        
        const submit = async(e)=>{
            e.preventDefault();
             await axios
             .post("http://localhost:4000/api/signup",Data)
             .then(function (response) {
            if (response.data.redirect == '/') {
                window.location = "/display"
            } else if (response.data.redirect == '/signup'){
                window.location = "/signup"
            }
        })
        .catch(function(error) {
            window.location = "/login"
        })
             setData(
             {
                Name: "",
                mailid:"" ,
                Semester: "",
                Branch: "",
                Campus:"" ,
                Password:""  
    
            })
			
        }

  
            
           

        console.log(Data);  
       
        return(
                <div>
             
                     <h2 style = {{color:'#353535',fontSize:80,fontFamily: 'cursive',textAlign:'left',marginBottom: 0,}}>Sign Up</h2>
                     <img className="img1" src = {logo} />
                    <hr/>
            
                <div style = {{color:"#353535", fontFamily: "cursive" ,fontSize: "large",marginLeft: 100,marginTop:20}}>

                    <img className = "img4" align="right" src ={img4}/>
                    <form method="POST" action="http://localhost:3000/login">
                    <h4>Name:<br/><input type = "textbox" className="tb2" name="Name" value = {Data.Name} onChange={change}/></h4>
                    <h4>Institution mail:<br/><input type ="email" pattern={"[0-9 A-Z a-z _ . @]+[.edu]"} className="tb2" name = "mailid" value = {Data.mailid} onChange = {change} required/></h4>
                    <h4>Semester:<br/><input type = "textbox" className="tb2" name="Semester" value = {Data.Semester} onChange={change}/></h4>
                    <h4>Branch:<br/><input type = "textbox" className="tb2" name="Branch" value = {Data.Branch} onChange={change}/></h4>
                    <h4>Campus:<br/><select className = "op1" name="Campus" value = {Data.Campus} onChange={change}>
                                        <option value = "RR">RR</option>
                                        <option value = "E-city">E-city</option>
                                        <option value = "Hanumanthanagar">Hanumanthanagar</option>
                                </select></h4>
                    <h4>Password:<br/><input type = "password"  id = "password" className="tb2" name = "Password" placeholder = "password" onChange =  {change} required /></h4>
                    <h4>Confirm Password:<br/><input type = "password" id = "confirmpass" className="tb2" name="confirmpass" onChange = {change} required/></h4>
                   < button id="mysubmit" type="submit" className="b4" value="Submit" onClick={submit}>Sign up</button>
                    </form>
                </div>
                    
                </div>



            
                
            )
}
export default Signup;