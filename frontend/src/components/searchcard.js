import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'



const SearchCard = ({book}) => {
  return (
 
          <Card  >
 

      <Card.Img variant="top" src={book.image} style={{width:'160px' ,float:'left',height:'180px'}}/>
      <Card.Body style={{paddingBottom: '40px',left:'40px' , position:'relative' }}>
        <b><Card.Title style={{ fontSize:'30px', color:'#3C6E71'}}>{book.name}</Card.Title></b>
        <Card.Text style={{ fontSize:'15px'}}>
		
          Author : {book.author}
		
		</Card.Text>
        <Link to={'book/' + book._id} ><Button className="b1" variant="primary">View</Button></Link>
			<br/>
			<br/>
      </Card.Body>
    </Card>
  )
}



export default SearchCard;
