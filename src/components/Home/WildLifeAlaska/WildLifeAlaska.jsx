import React, { useState } from "react";
import WildLifeStyle from "./WildLifeAlaska.module.css";
import AquaImage from "../../../Assets/aqua.png.png";
import YellowImage from "../../../Assets/yellow.png.png";
import WildImage from "../../../Assets/sairkaqaloca.png.png";



const WildLifeAlaska = () => {

  const [love, setLove] = useState(false);
  return (
    <>
      <div className={WildLifeStyle.WildContainer}>
        <div className={WildLifeStyle.InnerWildContainer}>
          <div className={WildLifeStyle.images}>
            <img src={YellowImage} alt="" />
            <img className={WildLifeStyle.Aqua} src={AquaImage} alt="" />
            <img src={WildImage} alt="" />
          </div>
          <div className={WildLifeStyle.WildTypoGraphy}>
            <div className={WildLifeStyle.Trending}>Trending Now</div>
            <h1>Wilderlife of Alaska</h1>
            <div className={WildLifeStyle.LocationAndReview}>
              <div className={WildLifeStyle.Location}>
                <i class="fa-solid fa-location-dot"></i>
                <p>Alaska, USA</p>
              </div>
              <div className={WildLifeStyle.ContainerStars}>
                <div className={WildLifeStyle.Review}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>Alaska, USA</p>
              </div>
            </div>
            <div className={WildLifeStyle.WildTypoGraphyText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div className={WildLifeStyle.Actions}>
              <button className={WildLifeStyle.Booking}>Book Now</button>
              <button
                onClick={() => setLove((prev) => !prev)}
                className={`${love && WildLifeStyle.LoveisTrue} ${ WildLifeStyle.love}`}
              >
                <i class="fa-solid fa-heart"></i>
              </button>
              <button className={WildLifeStyle.share}>
                <i class="fa-solid fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WildLifeAlaska;
