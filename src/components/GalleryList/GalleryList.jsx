import React from 'react';
import '../App/App.css'
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function GalleryList(props) {

  console.log('In GalleryList', props.galleryList);

  return (
    <>
    
      <CardColumns>
        {props.galleryList.map(item => (
          <Card 
            style={{ width: '18rem' }}
            border="secondary"
            className="p-3"
            key={item.id}
          >
            <Card.Img variant="top" src={item.path} />
            <Card.Body>
                <Card.Title>{item.description}</Card.Title>
                <Card.Text>
                  {item.quantity} {item.unit}
                </Card.Text>
            </Card.Body>
          </Card>
          ))}
      </CardColumns>
     
    </>
    
  );
}
