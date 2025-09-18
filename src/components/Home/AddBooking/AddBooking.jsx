import React, { useState } from "react";
import Dashbord from "../Dashbord/Dashbord";
import "./AddBooking.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooking = () => {
  const [time, settime] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocaltion] = useState("");
  const [qaarada, setQaarada] = useState("");
  const [price, setPrice] = useState("");
  const [qiimadhimis, setQiimadhimis] = useState("");
  const [start, setStrat] = useState("");
  const [end, setend] = useState("");
  const [image, setImage] = useState(null);

  const Navigate = useNavigate();

  const HandalData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("time", time);
    formData.append("people", people);
    formData.append("location", location);
    formData.append("qaarada", qaarada);
    formData.append("price", price);
    formData.append("qiimadhimis", qiimadhimis);
    formData.append("start", start);
    formData.append("end", end);
    formData.append("img", image);

    try {
      await axios.post("http://localhost:9007/createBooking", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Success Register Booking");
      Navigate("/TotalBooking");
    } catch (err) {
      console.error(err);
      alert("Error while registering booking");
    }
  };

  return (
    <div className="add-booking-page">
      <Dashbord />
      <div className="form-container">
        <form className="booking-form" onSubmit={HandalData}>
          <div className="form-row">
            <div className="form-group">
              <label>Days</label>
              <input
                value={time}
                onChange={(e) => settime(e.target.value)}
                type="number"
                placeholder="Days of Journey"
              />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <input
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                type="number"
                placeholder="Number of People"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <input
                value={location}
                onChange={(e) => setLocaltion(e.target.value)}
                type="text"
                placeholder="Country"
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                value={qaarada}
                onChange={(e) => setQaarada(e.target.value)}
                type="text"
                placeholder="Contact"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={start}
                onChange={(e) => setStrat(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={end}
                onChange={(e) => setend(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label>Discount</label>
              <input
                value={qiimadhimis}
                onChange={(e) => setQiimadhimis(e.target.value)}
                type="number"
                placeholder="Discount"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          </div>

          <button type="submit" className="submit-btn">
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
