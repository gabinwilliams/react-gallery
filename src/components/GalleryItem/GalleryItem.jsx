import {useState} from 'react';
import '../App/App.css'
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



export default function GalleryItem(props) {


  const [showPhoto, setShowPhoto] = useState(true);

  let displayPhoto = (item) => {
    if(showPhoto) {
      return (<Card.Img key={props.item.id} onClick={togglePhoto} variant="top" src={item.path} />)
    }else {
      return (<Card.Title key={props.item.id} onClick={togglePhoto} >{item.description}</Card.Title>)
    }

  }

  let togglePhoto = (event) => {

    console.log('toggle click id:', event.target.id);
    console.log('toggle click key:', props.item.id);
   
    setShowPhoto(!showPhoto);

   
    
  }

  return (
    <Card 
      style={{ width: '18rem' }}
      border="secondary"
      className="p-3"
      key={props.item.id}
      
      
    >
        {displayPhoto(props.item)}
      <Card.Body>
          
          <Card.Text>
            Likes: {props.item.likes} 
          </Card.Text>
          
          <Button 
            onClick={props.updateLikeCount}
            key={props.item.id}
            variant="primary" 
            id={props.item.id}
            style={{margin: '3px'}}>
              
            
            Like
          </Button>
          
      </Card.Body>
    </Card>

  )
}
  

