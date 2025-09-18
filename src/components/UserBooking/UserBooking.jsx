import React, { useEffect, useState } from "react";
import "../UserBooking/UserBooking.css";
import Dashbord from "../Home/Dashbord/Dashbord";
import axios from "axios";

const UserBooking = () => {
  const [data, setData] = useState([]);

  const HandalReadDataUser = () => {
    axios.get("http://localhost:9007/readUser").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    HandalReadDataUser();
  }, []);

  const sendEmail = (id, type) => {
    // type = "accept" or "valid"
    axios
      .post(`http://localhost:9007/sendEmail/${id}`, { type })
      .then((res) => {
        alert(`Email sent successfully: ${type}`);
      })
      .catch((err) => {
        alert("Failed to send email");
        console.error(err);
      });
  };

  return (
    <div className="table-page">
      <Dashbord />
      <div className="table-wrapper">
        <h2 className="table-title">User List</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>Number_Of_ticket</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td>{item.ticket}</td>
                <td className="actions">
                  <button
                    className="accept-btn"
                    onClick={() => sendEmail(item._id, "accept")}
                  >
                    Accept
                  </button>
                  <button
                    className="valid-btn"
                    onClick={() => sendEmail(item._id, "valid")}
                  >
                    Valid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBooking;
