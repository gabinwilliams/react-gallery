
import '../App/App.css'
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import GalleryItem from '../GalleryItem/GalleryItem'

export default function GalleryList(props) {

  


  

 


  return (
    <>
    
      <CardColumns>
        {props.galleryList.map(item => (

          < GalleryItem 
          
          item={item} 
          updateLikeCount={props.updateLikeCount}
          />

        ))}
      
     </CardColumns>
    </>
    
  );
}
