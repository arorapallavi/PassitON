import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'



const BookCard = ({book}) => {
  return (
  <Row style={{display:"flex"}}>
  <Col md={4}>
<Card style={{ width: '18rem' ,marginTop:"10px"}}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
		
          Author : {book.author}
		
		</Card.Text>
        <Link to={'book/' + book._id} ><Button variant="primary">View</Button></Link>
      </Card.Body>
    </Card>
	</Col>
	</Row>
  )
}



export default BookCard;
