import React from "react";
import sawwir from "../../Assets/about.png";
import feature from "../../Assets/featured tours.png";
import about from "../../Assets/burimg.png";
import tours from "../../Assets/tours.png";
import cost from "../../Assets/Customization.png";
import Best from "../../Assets/best.png";
import calcu from "../../Assets/calculate.png";
import "../ourAboutUs/AboutUs.css";
import image from '../../Assets/logo 1.png'
import Nav from "../Home/Header/Nav/Nav";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className='HeaderContainer'>
        <div className='Logo' >
          <img src={image} alt="" />
        </div>
        <Nav />
      </div>

      <div>
        <img src={sawwir} alt="" width={"100%"} />
      </div>
      <div className="title">
        <div className="TypoGraphy">
          <div className="sectionTypo">
            <h1>
              Who <span>We Are?</span>
            </h1>
            <p>
              We’re all about creating unforgettable experiences for our guests.
              Our journey began with a simple passion for exploring the beauty
              of the World. 
            </p>
          </div>
          <div className="sectionTypo">
            <h1>
              Our<span>Mission</span>
            </h1>
            <p>
              We believe that travel is not just about visiting new places, but
              about immersing yourself in new cultures, connecting with nature,
              and making memories that last a lifetime.
            </p>
          </div>
        </div>

        <div>
          <img src={about} alt="" />
        </div>
      </div>

      <div className="cardsContainer">
        <div className="CardDescription">
          <h3>What we serve</h3>
          <p>We offer our best services</p>
        </div>
        <div className="Cards">
          <img src={cost} alt="" />
          <img src={Best} alt="" />
          <img src={calcu} alt="" />
        </div>
      </div>

      <div>
        <img src={feature} alt="" />
        <img src={tours} alt="" />
      </div>
      <Footer/>
    </>
  );
};

export default About;
