import React from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header/Header";
import BookingStyle from "./Booking.module.css";
import Nav from "../Home/Header/Nav/Nav";
import BookingHeader from "./BookingHeader/BookingHeader";
import BookingInformation from "./BookingInformation/BookingInformation";
import BookingForm from "./BookingForm/BookingForm";
import Footer from "../Footer/Footer";
// import image from "../../../Assets/logo 1.png";

import image from '../../Assets/logo 1.png';



const Booking = () => {




  return (
    <>

      <div className={BookingStyle.HeaderContainer}>
        <div className={BookingStyle.Logo}>
          <img src={image} alt="" />
        </div>
        <Nav />
      </div>
      <div className={BookingStyle.ContainerAll}>
        <div className={BookingStyle.HeadContainer}>
          <div className={BookingStyle.OuterContainer}>
            <div className={BookingStyle.BookingContainer}>
              <BookingHeader />
              <BookingInformation />
              <BookingForm />
            </div>
          </div>
        </div>
        <div className={BookingStyle.Footer}>
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Booking;
