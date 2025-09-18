import { Link, Links, NavLink } from "react-router-dom";
import NavContainer from "./Nav.module.css";
import React, { useContext } from "react";
import Auth from "../../../../store/ContextAuth/Auth";
const Nav = () => {
  const context = useContext(Auth);
  console.log("waa login ", context.login);

  return (
    <>
      <nav className={NavContainer.ContainerNav}>
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About Us </li>
          </Link>
          <Link to="/ourpacakge">
            {" "}
            <li>Our Packages </li>
          </Link>
          <Link to="/dash">
            {" "}
            <li>Dashbord </li>{" "}
          </Link>
          <Link to="/booking">
            {" "}
            <button>Booking</button>
          </Link>
          <NavLink to="/cartPage">
            {" "}
            <i className="fa-solid fa-home"></i>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
