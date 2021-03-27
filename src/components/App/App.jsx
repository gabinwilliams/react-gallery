import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryItems();
  }, []);

  // GET REQUEST for GalleryList
  const getGalleryItems = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLikeCount = (event) => {
    event.preventDefault();

    let id = event.target.id;

    console.log("Adding 1 to count of this id:", id);

    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getGalleryItems();
      })
      .catch((err) => {
        console.log("In PUT on client going to server", err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <GalleryList
        galleryList={galleryList}
        updateLikeCount={updateLikeCount}
      />
    </div>
  );
}

export default App;
