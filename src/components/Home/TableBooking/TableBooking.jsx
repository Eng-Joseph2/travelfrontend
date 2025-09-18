import { useEffect, useState } from "react";
import Dashbord from "../Dashbord/Dashbord";
import "../TableBooking/TableBooking.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const TableBooking = () => {
  const [data, setData] = useState([]);

  const HandalData = () => {
    axios.get("http://localhost:9007/readBooking").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    HandalData();
  }, []);

  const HandalDelete = (id) => {
    axios.delete(`http://localhost:9007/deleteBooking/${id}`);
    alert("Success Delete");
    HandalData();
  };

  return (
    <div className="table-page">
      <Dashbord />
      <div className="table-wrapper">
        <h2 className="table-title">Booking List</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Days</th>
              <th>People</th>
              <th>Country</th>
              <th>City</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:9007/iamges/${item.Bimage}`}
                      alt="Tour"
                      className="table-img"
                    />
                  </td>
                  <td>{item.time} days</td>
                  <td>{item.people} People</td>
                  <td>{item.location}</td>
                  <td>{item.qaarada}</td>
                  <td>{item.start}</td>
                  <td>{item.end}</td>
                  <td>${item.price}</td>
                  <td>${item.qiimadhimis}</td>
                  <td className="actions">
                    <NavLink to={`/updateBookings/${item._id}`}>
                      <i
                        className="fa-solid fa-pen-to-square edit-icon"
                        title="Edit"
                      ></i>
                    </NavLink>
                    <i
                      onClick={() => HandalDelete(item._id)}
                      className="fa-solid fa-trash delete-icon"
                      title="Delete"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="11"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBooking;
