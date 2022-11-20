import React from "react";
import "./searchbook.css";
import {useState} from "react"
import axios from 'axios'

const Searchbook = () =>{
	

	return(
	       <form className="home-form">
         <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
		 < button className="home-button button" value="Submit" >Search</button>
        </form>
	);
};

export default Searchbook;