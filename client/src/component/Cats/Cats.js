import React from 'react';
import Card from 'react-bootstrap/Card';
import './cats-styling.css';

const Cats = (props) => {
   return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        <p id="cat-text">Cats Name: {props.name}</p>
      </Card.Text>
    </Card.Body>
  </Card>
   )
}

export default Cats;