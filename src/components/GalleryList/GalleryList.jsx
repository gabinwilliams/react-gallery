import "../App/App.css";
import CardColumns from "react-bootstrap/CardColumns";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {
  return (
    <>
      <CardColumns>
        {props.galleryList.map((item) => (
          <GalleryItem key={item.id} item={item} updateLikeCount={props.updateLikeCount} />
        ))}
      </CardColumns>
    </>
  );
}


export default GalleryList;