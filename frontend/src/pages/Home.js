import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
const bgimg = require('./bg.jpeg')
const logo = require('./pass_it_on.jpeg')
const Home = () => {
        return(
                <div className = "bg">
                         <img className="img1_hp" src = {logo} />
                         <h1 style = {{color:'#353535',fontSize:80,fontFamily: "cursive",textAlign: "left",marginBottom: 0,marginTop: 0,display:"inline",marginLeft:"20px"}}>Pass It On</h1>
                         <hr/>
                        <div style = {{fontSize: 60,fontFamily: "cursive",marginLeft: 150}}>
                            <p style={{marginBottom: 5}}>
                                Buy<span>.</span>
                            </p>
                            <p style={{marginTop: 5,marginBottom: 5}}>
                                Sell<span>.</span>
                            </p>
                            <p style={{marginTop: 5}}>
                                Repeat<span>.</span>
                            </p>
                        </div>
                    
                <Link className = "b1" to = "/login"><span>Login</span></Link>

                <Link className = "b2" to = "/signup"><span>Signup</span></Link>
                    
                </div>
            )
}
export default Home;