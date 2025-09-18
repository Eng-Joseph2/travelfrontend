import React, { useContext } from "react";
import "./Dashbord.css";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../../store/ContextAuth/Auth";
import Login from "../../Login/Login";

const Dashbord = () => {
  const ctx = useContext(Auth);

  return (
    <div className="dash">
      <div className="dash1">
        <h1>Travel Word System</h1>
      </div>

      <NavLink
        to="/dash"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-user"></i>
        <h4>Dashbord</h4>
      </NavLink>

      <NavLink
        to="/TotalBooking"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-user"></i>
        <h4>Booking</h4>
      </NavLink>

      <NavLink
        to="/AddBooking"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-add"></i>
        <h4>Add Booking</h4>
      </NavLink>
      <NavLink
        to="/userBooking"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-user"></i>
        <h4>User Booking</h4>
      </NavLink>

      <NavLink
        to="/pictures"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-user"></i>
        <h4>Pictures</h4>
      </NavLink>

      <NavLink
        to="/celender"
        className={({ isActive }) => (isActive ? "dash2 active" : "dash2")}
      >
        <i className="fa-solid fa-user"></i>
        <h4>Celender</h4>
      </NavLink>

      <button className="btn1">Logo Out</button>
    </div>
  );
};

export default Dashbord;
