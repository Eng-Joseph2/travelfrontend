import { useEffect, useState } from "react";
import "../UserBookingDesign/UserBookingDesign.css";
import axios from "axios";

export const UserBookingDesign = () => {
  const [Booking, setBooking] = useState([]);
  const HandalBooking = () => {
    axios.get("http://localhost:9007/readuser").then((res) => {
      setBooking(res.data);
    });
  };
  useEffect(() => {
    HandalBooking();
  }, []);
  return (
    <div>
      <div className="dash4">
        <div>
          <i className="fa-solid fa-user"></i>
        </div>
        {/* isbarbardhiga bookinka */}
        <div className="dash5">
          <h5>Total User Booking</h5>
          <h1>{Booking.length}</h1>
        </div>
        <h1 className="dash7">-1.23%</h1>
      </div>
  </div>
);
};
