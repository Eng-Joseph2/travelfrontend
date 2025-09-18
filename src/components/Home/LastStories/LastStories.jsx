import React from "react";
import LastStoriesStyle from "./LastStories.module.css";
import Story from "./Story/Story";
import imageStory1 from '../../../Assets/Stories1.png';
import imageStory2 from '../../../Assets/Stories2.png';
import imageStory3 from '../../../Assets/Stories3.png';
import imageStory4 from '../../../Assets/Stories4.png';

const LastStories = () => {

  const Stories = [
    {
      id:1,
      image: imageStory1
    },
    {
      id:2,
      image: imageStory2
    },
    {
      id:3,
      image: imageStory3
    },
    {
      id:4,
      image: imageStory4
    }
  ]

  return (
    <>
      <div className={LastStoriesStyle.StoryContainer}>
        <div className={LastStoriesStyle.GalleriesHEader}>
          <div className={LastStoriesStyle.GalleryHeaderDescription}>
            <h1>From The Gallery</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet <br /> sint. Velit officia consequat duis enim velit mollit
            </p>
          </div>
          <button className={LastStoriesStyle.GalleryViewAll}>View More</button>
        </div>
        <div className={LastStoriesStyle.ContainerStoryImages}>
            {Stories.map((obj) => {
              return <Story image={obj.image}/>
            }) }
        </div>
      </div>
    </>
  );
};

export default LastStories;
