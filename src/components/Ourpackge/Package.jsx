import React from "react";
import imag from "../../Assets/all tours.png";
import DisplayBooking from "../DisplayBooking/DisplayBooking";
import PackageStyle from './Package.module.css';
import image from '../../Assets/logo 1.png';
import Nav from "../Home/Header/Nav/Nav";
const Package = () => {
  return (
    <>
      <div className={PackageStyle.HeaderContainer}>
        <div className={PackageStyle.Logo}>
          <img src={image} alt="" />
        </div>
        <Nav />
      </div>
      <div>
        <img src={imag} alt="" width={'100%'} />
      </div>

      <DisplayBooking />
    </>
  );
};

export default Package;
