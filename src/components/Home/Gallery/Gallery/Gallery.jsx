import React, { useCallback, useState } from "react";
import imageGalleryContainer from "./Gallery.module.css";

const Gallery = (props) => {
  // const [CurrentImages, setCurrentImages] = useState([]);



  const FindedImages= [];

  if(props.viewMore !== true ){

    const FilteringImages = props.ListGallery.filter((obj) => {
      return obj.id <= 8
    })
    
    FilteringImages.map((obj) => {
      return FindedImages.push(obj)
    })

  }
  else{

    props.ListGallery.map((obj) => {
      return FindedImages.push(obj)
    })
    
  }

  return (
    <>
      <div className={imageGalleryContainer.Container}>
        {FindedImages.map((obj) => {
          return <img src={obj.image} alt="" />;
        })}
      </div>
    </>
  );
};

export default Gallery;
