import React from 'react';
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
          <Card key={item.id}>
            <Card.Body>
                <Card.Title>{item.description}</Card.Title>
                <Card.Text>
                  {item.quantity} {item.unit}
                </Card.Text>
                <img src="../../../public/images/actual_restaurant.jpg">
                
                </img>
              </Card.Body>
          </Card>
          ))}
      </CardColumns>
      {/* <table>
        <tbody>
          {props.galleryList.map(item => (
          <tr scope="row" key={item.id}>
              <td>{item.path}</td>
              <td>{item.description}</td>
          </tr>
          ))}
        </tbody>
      </table> */}
    </>
    
  );
}
