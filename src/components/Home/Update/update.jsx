import { useEffect, useState } from "react";
import Dashbord from "../Dashbord/Dashbord";
import "../Update/Update.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBooking = () => {
  const [time, settime] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocaltion] = useState("");
  const [qaarada, setQaarada] = useState("");
  const [price, setPrice] = useState("");
  const [qiimadhimis, setQiimadhimis] = useState("");
  const [image, setImage] = useState(null);

  const params = useParams();

  const HandalReadSingle = () => {
    axios
      .get(`http://localhost:9007/singleReading/${params.id}`)
      .then((res) => {
        settime(res.data.time);
        setPeople(res.data.people);
        setLocaltion(res.data.location);
        setQaarada(res.data.qaarada);
        setPrice(res.data.price);
        setQiimadhimis(res.data.qiimadhimis);
        setImage(res.data.Bimage); // match backend field
      })
      .catch((err) => {
        console.log("Error fetching booking:", err);
      });
  };

  useEffect(() => {
    HandalReadSingle();
  }, []);

  const Navigate = useNavigate();

  const formData = new FormData();
  formData.append("time", time);
  formData.append("people", people);
  formData.append("location", location);
  formData.append("qaarada", qaarada);
  formData.append("price", price);
  formData.append("qiimadhimis", qiimadhimis);
  formData.append("img", image);
  const HandalUpdata = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9007/UpdateBooking/${params.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Sucess Update");
    Navigate("/TotalBooking");
  };

  return (
    <div className="add-booking-page">
      <Dashbord />
      <div className="form-container">
        <form onSubmit={HandalUpdata} className="booking-form">
          <input
            value={time}
            onChange={(e) => settime(e.target.value)}
            type="number"
            placeholder="Days of Journey"
          />
          <input
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            type="number"
            placeholder="Number of People"
          />
          <input
            value={location}
            onChange={(e) => setLocaltion(e.target.value)}
            type="text"
            placeholder="Country"
          />
          <input
            value={qaarada}
            onChange={(e) => setQaarada(e.target.value)}
            type="text"
            placeholder="Contact"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
          <input
            value={qiimadhimis}
            onChange={(e) => setQiimadhimis(e.target.value)}
            type="number"
            placeholder="Discount"
          />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <button type="submit" className="submit-btn">
            Update Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBooking;
