import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../DisplayBooking/DisplayBooking.css";
import Auth from "../../store/ContextAuth/Auth";

const DisplayBooking = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const ctx = useContext(Auth);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:9007/readBooking");
      const bookings = await res.json();
      setData(bookings);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const addToCart = (index) => {
    setData((prevData) => {
      const updatedData = prevData.map((item) => ({ ...item }));

      if (updatedData[index].people > 0) {
        updatedData[index].people -= 1; // hoos u dhig hal qof
        ctx.setCurrentBooking({
          Country: updatedData[index].location,
          Price: updatedData[index].price,
        });
      }

      return updatedData;
    });
  };

  return (
    <div className="display-container">
      {data.map((item, index) => (
        <div className="display" key={index}>
          <img
            src={`http://localhost:9007/iamges/${item.Bimage}`}
            alt={item.location}
          />
          <div className="content">
            <h3>{item.location}</h3>

            {/* Days | People */}
            <div className="info">
              <span>📅 {item.time} days</span>
              <span>👥 {item.people} People</span>
            </div>

            {/* Price | Discount */}
            <div className="info">
              <span>Price: ${item.price}</span>
              <span className="old-price">${item.qiimadhimis}</span>
            </div>

            {/* Start | End */}
            <div className="info">
              <span>Start: {item.start ? item.start.split("T")[0] : ""}</span>
              <span>End: {item.end ? item.end.split("T")[0] : ""}</span>
            </div>

            <button
              onClick={() => addToCart(index)}
              disabled={item.people === 0}
            >
              {item.people === 0 ? "Sold Out" : "Book now"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayBooking;
