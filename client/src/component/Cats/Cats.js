import React from 'react';
import Card from 'react-bootstrap/Card';
import './cats-styling.css';
import LikesCounter from '../LikesCounter/LikesCounter';

const Cats = (props) => {
   return(
    <Card style={{ width: '18rem' }} key={props.id}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        <LikesCounter />
      </Card.Text>
    </Card.Body>
  </Card>
   )
}

export default Cats;