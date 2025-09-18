import React from "react";
import { useState } from "react";
import GalleryConatinerStyle from "./Galleries.module.css";
import Gallery from "./Gallery/Gallery";
import image1 from '../../../Assets/imag1.png.png';
import image2 from '../../../Assets/imag2.png.png';
import image3 from '../../../Assets/imag3.png.png';
import image4 from '../../../Assets/imag4.png.png';
import image5 from '../../../Assets/imag5.png.png';
import image6 from '../../../Assets/imag6.png.png';
import image7 from '../../../Assets/imag7.png.png';
import image8 from '../../../Assets/imag8.png.png';
import somali1 from '../../../Assets/somalli1.png.jpg'
import somali2 from '../../../Assets/somali2.png.jpg'
import somali3 from '../../../Assets/somali3.png.jpg'
import somali4 from '../../../Assets/somali4.png.jpg'

const Galleries = () => {

  const [viewMore, setViewMore] = useState(false);

  const GalleryImages =[
    {
      id:1,
      image:image1
    },
    {
      id:2,
      image:image2
    },
    {
      id:3,
      image:image3
    },
    {
      id:4,
      image:image4
    },
    {
      id:5,
      image:image5
    },
    {
      id:6,
      image:image6
    },
    {
      id:7,
      image:image7
    },
    {
      id:8,
      image:image8
    },
    {
      id:9,
      image:somali1
    },
    {
      id:10,
      image:somali2
    },
    {
      id:11,
      image:somali3
    },
    {
      id:12,
      image:somali4
    }
  ]

  
  return (
    <div className={GalleryConatinerStyle.Container}>
      <div className={GalleryConatinerStyle.GalleriesHEader}>
        <div className={GalleryConatinerStyle.GalleryHeaderDescription}>
          <h1>From The Gallery</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit
          </p>
        </div>
        <button onClick={() => setViewMore(true)} className={GalleryConatinerStyle.GalleryViewAll}> View More</button>
      </div>
      <Gallery viewMore={viewMore} ListGallery={GalleryImages}/>
    </div>
  );
};

export default Galleries;
