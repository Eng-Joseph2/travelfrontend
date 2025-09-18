import React, { useContext } from "react";
import BookingInfoStyle from "./BookingInformation.module.css";
import Image1 from "../../../Assets/imag1.png.png";
import Image2 from "../../../Assets/imag2.png.png";
import Image3 from "../../../Assets/imag3.png.png";
import Image4 from "../../../Assets/imag4.png.png";
import Image5 from "../../../Assets/imag5.png.png";
import Image6 from "../../../Assets/imag6.png.png";
import Fly from '../../../Assets/Fly.png'
import Auth from "../../../store/ContextAuth/Auth";
const BookingInformation = () => {


  const ctx = useContext(Auth)
  return (
    <>
      <div className={BookingInfoStyle.Conatiner}>
        <div className={BookingInfoStyle.CountryAndPrice}>
          <div className={BookingInfoStyle.CountryrReview}>
            <h1>{ctx.CurrentBooking.Country}</h1>
            <div className={BookingInfoStyle.Review}>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p style={{ color: "black", marginLeft: "1rem" }}>
                (2.3k review)
              </p>
            </div>
          </div>
          <div className={BookingInfoStyle.PriceContainer}>
            <p className={BookingInfoStyle.Price}>{ctx.CurrentBooking.Price}$</p>
            <p className={BookingInfoStyle.PerCouble}>
              {" "}
              <span>/</span> Per Couple{" "}
            </p>
          </div>
        </div>

        <div className={BookingInfoStyle.InfoDescription}>
          <p>
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
            aut magni nesciunt? Quo quidem neque iste expedita est dolor
            similique ut quasi maxime ut deserunt autem At praesentium
            voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut
            provident aliquam. Aut aspernatur consequuntur eum quaerat
            distinctio ut inventore aliquid et quasi alias ut rerum suscipit et
            nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore
            nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita
            est dolor similique ut quasi maxime ut deserunt autem At praesentium
            voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut
            provident aliquam. Aut aspernatur consequuntur eum quaerat
            distinctio ut inventore aliquid et quasi alias ut rerum suscipit et
            nihil deleniti.
          </p>
        </div>

        <div className={BookingInfoStyle.Lines}>
          <div className={BookingInfoStyle.Line1}>
            <ul>
              <li>Destination</li>
              <li>Departure</li>
              <li>Departure Time</li>
              <li>Return Time</li>
              <li>Dress Code</li>
              <li>Not Included</li>
              <li>Included</li>
            </ul>
          </div>
          <div className={BookingInfoStyle.Line2}>
            <ul>
              <li>: Zurich, Switzerland</li>
              <li>: Main Sqaure, New City</li>
              <li>: Approximately 08 : 10 AM</li>
              <li>: Approximately 07 : 20 PM</li>
              <li>: Casual, comfortable and light</li>
              <li>
                <div className={BookingInfoStyle.NotInclude}>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-xmark"></i>
                    <p>Galler Ticket</p>
                  </div>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-xmark"></i>
                    <p>lunch</p>
                  </div>
                </div>
              </li>

              <li>
                <div className={BookingInfoStyle.Include}>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>5 star Accomodations</p>
                  </div>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>Airport Transfer</p>
                  </div>
                </div>
                <div className={BookingInfoStyle.Include}>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>Breakfast</p>
                  </div>
                  <div className={BookingInfoStyle.Lunch}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>Personal Guide</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={BookingInfoStyle.GallerySection}>
          <div className={BookingInfoStyle.GalleryContainer}>
            <div className={BookingInfoStyle.GalleryDescription}>
              <h1>From our gallery</h1>
              <p>
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi.{" "}
              </p>
            </div>

            <div className={BookingInfoStyle.GalleryImages}>
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
              <img src={Image5} alt="" />
              <img src={Image6} alt="" />
            </div>
          </div>
          <div className={BookingInfoStyle.Fly}>
              <img src={Fly} alt="" width={'400px'} height={'50%'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingInformation;
