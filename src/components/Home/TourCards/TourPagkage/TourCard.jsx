import { useContext, useState } from "react";
import TourCardsStyle from "./TourCard.module.css";
import Auth from "../../../../store/ContextAuth/Auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthUsersContext from "../../../../store/UsersInfo/UsersInfoContext";


const TourCard = (props) => {

  

  const ctxInfoUsers = useContext(AuthUsersContext);

  console.log(ctxInfoUsers);
  
  const navigate = useNavigate();

  const ctx = useContext(Auth);

  const OnSubmit = (e) => {

    e.preventDefault();

    console.log(ctxInfoUsers.login);
    
    // if (!ctxInfoUsers.login) {

    //   navigate("./cartPage");

    // } 

    // else {

      const NewBooking = {
        image : props.background,
        Country: props.country,
        Price: props.Discount,

      };

      ctx.setCurrentBooking(NewBooking);

      

      navigate("./booking");
    // }

  };

  return (
    <>
      {/* <div className={TourCardsStyle.CardsContainer}> */}
      <div className={TourCardsStyle.Card}>
        <div
          className={TourCardsStyle.CardImage}
          style={{ backgroundImage: `url(${props.background})` }}
        >
          <div
            className={TourCardsStyle.Country}
            style={{ backgroundImage: `url(${props.logo})` }}
          ></div>
        </div>
        <div className={TourCardsStyle.PeoplesAndDays}>
          <div className={TourCardsStyle.DaysAndPeople}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
              alt=""
              width={"23px"}
              height={"25px"}
            />
            <p>8 days</p>
          </div>
          <div className={TourCardsStyle.DaysAndPeople}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt=""
              width={"23px"}
              height={"25px"}
            />
            <p>{props.peoples} Peoples Going</p>
          </div>
        </div>
        <div className={TourCardsStyle.CountryAndReviews}>
          <h1>{props.country}</h1>
          <div className={TourCardsStyle.Review}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div className={TourCardsStyle.CountryLocation}>
          <i class="fa-solid fa-location-dot"></i>
          <p>{props.Content}</p>
        </div>
        <div className={TourCardsStyle.Price}>
          <p>{props.OldPrice}</p>
          <span>{props.Discount}</span>
        </div>
        <div className={TourCardsStyle.AbouCountry}>
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </div>
        <button onClick={OnSubmit}>Book now</button>
      </div>
      {/* </div> */}
    </>
  );
};

export default TourCard;
