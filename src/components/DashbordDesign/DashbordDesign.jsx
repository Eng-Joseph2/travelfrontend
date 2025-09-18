import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../DashbordDesign/DashbordDesign.css";
import Dashbord from "../Home/Dashbord/Dashbord";
import { UserBookingDesign } from "../UserBookingDesign/UserBookingDesign";
import CartContext from "../../store/CartContext/CartContext";

const DashbordDesign = () => {
  const ctxCart = useContext(CartContext);

  const TotolCart = ctxCart.Cart.reduce((initial, trip) => {
    return initial + trip.price;
  }, 0);

  const [data, setData] = useState([]);

  const HandalRead = () => {
    axios.get("http://localhost:9007/readBooking").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    HandalRead();
  }, []);

  return (
    <div className="dash3">
      <Dashbord />
      {/* div weynta */}
      <div className="dash2">
        {/* <div>
          <h1>Daashbord</h1>
        </div> */}
        {/* map 1 */}
        <div className="dash4">
          <div>
            <i className="fa-solid fa-box"></i>
          </div>
          {/* isbarbardhiga bookinka */}
          <div className="dash5">
            <h5>Total Bakages</h5>
            <h1>{data.length}</h1>
          </div>
          <h1 className="dash6">+2.98%</h1>
        </div>
        ;{/* map1 */}
        <UserBookingDesign />
        {/* 3 */}
        <div className="dash4">
          <div>
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
          {/* isbarbardhiga bookinka */}
          <div className="dash5">
            <h5>Total Earings</h5>
            <h1>{TotolCart}</h1>
          </div>
          <h1 className="dash6">+2.98%</h1>
        </div>
        {/* <div>
          <img
            style={{ width: "300px", height: "300px" }}
            src="https://images.unsplash.com/photo-1612832021247-8d84b0c44e27?auto=format&fit=crop&w=300&q=80"
            alt="Chart Illustration"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DashbordDesign;
