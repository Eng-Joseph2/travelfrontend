import React, { useContext } from "react";
import BookingFormStyle from "./BookingForm.module.css";
import useInput from "../../../Hooks/Input/useInput";
import Auth from "../../../store/ContextAuth/Auth";
import CartContext from "../../../store/CartContext/CartContext";

const BookingForm = () => {
  const ctx = useContext(Auth);
  const ctxCart = useContext(CartContext);

  const {
    input: name,
    invalid: invalidName,
    InputHandler: NameHandler,
    Valid: ValidName,
    blurHandler: BlurName,
    ResetHandler: ResetName,
  } = useInput((name) => name.trim().length > 7);

  const {
    input: email,
    invalid: emailInvalid,
    Valid: ValidEmail,
    InputHandler: emailHandler,
    blurHandler: emailBlur,
    ResetHandler: emailReset,
  } = useInput((email) => email.includes("@"));

  const {
    input: phone,
    invalid: invalidPhone,
    Valid: ValidPhone,
    InputHandler: PhoneHandler,
    blurHandler: BlurPhone,
    ResetHandler: ResetPhone,
  } = useInput((phone) => phone.trim().length > 6);

  const submitValid = ValidName && ValidEmail && ValidPhone;

  const OnSubmit = (e) => {
    e.preventDefault();

    const NewUser = {
      name,
      phone,
      email,
      ticket: 1, // ticket number by default
      location: ctx.CurrentBooking.Country,
    };

    ctxCart.CartChangeHandler({
      name,
      phone,
      email,
      ticket: 1,
      location: ctx.CurrentBooking.Country,
      image: ctx.CurrentBooking.image,
      price: ctx.CurrentBooking.Price,
    });

    ctx.PeopleChangeHandler();

    // reset inputs
    ResetName();
    emailReset();
    ResetPhone();
  };

  return (
    <div className={BookingFormStyle.Container}>
      <div className={BookingFormStyle.FormHeader}>
        <h1>Book This Tour</h1>
        <p>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut magni nesciunt? Quo quidem neque iste expedita est dolo.
        </p>
      </div>
      <form onSubmit={OnSubmit}>
        <input
          className={invalidName && BookingFormStyle.invalid}
          value={name}
          type="text"
          placeholder="Name"
          onChange={NameHandler}
          onBlur={BlurName}
        />
        <input
          value={email}
          className={emailInvalid && BookingFormStyle.invalid}
          type="email"
          placeholder="Email"
          onChange={emailHandler}
          onBlur={emailBlur}
        />
        <input type="email" placeholder="Confirm email" />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          className={invalidPhone && BookingFormStyle.invalid}
          onChange={PhoneHandler}
          onBlur={BlurPhone}
        />
        <input type="date" placeholder="dd-mm-yy" />
        <input
          type="number"
          placeholder="Number of ticket"
          value={1} // ticket number by default
          readOnly // user cannot change it
        />
        <input type="text" placeholder="Message" />

        <button>Check Availability</button>
        <button disabled={!submitValid} type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
