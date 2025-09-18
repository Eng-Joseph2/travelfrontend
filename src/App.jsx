import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TableBooking from "./components/Home/TableBooking/TableBooking";
import AddBooking from "./components/Home/AddBooking/AddBooking";
import UpdateBooking from "./components/Home/Update/update";
import Booking from "./components/Booking/Booking";
import Dashbord from "./components/Home/Dashbord/Dashbord";
import UserBooking from "./components/UserBooking/UserBooking";
import Package from "./components/Ourpackge/Package";
import CartPage from "./components/CartPage/CartPage";
import About from "./components/ourAboutUs/AboutUS";
import GalaxyTravelCart from "./components/GalaxyTravelCart/GalaxyTravelCart";
import Registration from "./components/Registration/Registration";
import DashbordDesign from "./components/DashbordDesign/DashbordDesign";

// ProtectedRoute import
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />

        {/* Dashbord oo u baahan login */}
        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <DashbordDesign />
            </ProtectedRoute>
          }
        />

        <Route path="/TotalBooking" element={<TableBooking />} />
        <Route path="/AddBooking" element={<AddBooking />} />
        <Route path="/updateBookings/:id" element={<UpdateBooking />} />
        <Route path="/userBooking" element={<UserBooking />} />
        <Route path="/ourpacakge" element={<Package />} />
        <Route path="/cartPage" element={<GalaxyTravelCart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
