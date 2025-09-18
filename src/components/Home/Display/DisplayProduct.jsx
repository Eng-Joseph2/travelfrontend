import "../Display/Displayproduct.css";
import img1 from "../../../Assets/AustraliaImage.png";
import { useEffect, useState } from "react";
import axios from "axios";


import { Link, NavLink, useNavigate } from "react-router-dom";

const DisplayProduct = () => {


  const navigate = useNavigate()


  const [data, setData] = useState([]);

  const HandalReadData = () => {
    axios.get("http://localhost:9007/readBooking").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    HandalReadData();
  }, []);

  return (
    <div className="display-container">
      {data.map((item, index) => (
        <div className="display" key={index}>
          <img
            src={`http://localhost:9007/iamges/${item.Bimage}`}
            alt={item.location}
          />
          <div className="content">
            <div className="info">
              <span>📅 {item.time} days</span>
              <span>👥 {item.people} People Going</span>
            </div>
            <div className="title">
              <h1>{item.location}</h1>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="location">📍 {item.qaarada}</div>
            <div className="price">
              ${item.price}{" "}
              <span className="old-price">{item.qiimadhimis}</span>
            </div>
            <p>
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia...
            </p>
            <NavLink to="/booking"> <button >Book now</button></NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProduct;
