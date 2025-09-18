import React, { useContext, useState } from "react";
import styles from "./Registration.module.css";
// import boxIcon from './box-icon.png'; // icon image placeholder

import RegisterImage from "../../Assets/Register.png";
import loginImage from "../../Assets/Login.png";
import AuthUsersContext from "../../store/AuthUsers/AuthUsersContext";
import useInput from "../../Hooks/Input/useInput";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  // i use in this line custom hook i perpared for the input controlling touch and valid and i use  all about inputs
  const navigate= useNavigate()

  const {
    input: fullName,
    Valid: fullNameValid,
    invalid: fullNameInvalid,
    blurHandler: fullNameBlur,
    InputHandler: fullNameHandler,
    ResetHandler: fullNameReset,
  } = useInput((fName) => fName.trim().length > 1);

  const {
    input: email,
    Valid: emailValid,
    invalid: emailInvalid,
    blurHandler: emailBlur,
    InputHandler: emailHandler,
    ResetHandler: emailReset,
  } = useInput((gmail) => gmail.includes("@"));

  const {
    input: password,
    Valid: passwordValid,
    invalid: passwordInvalid,
    blurHandler: passwordBlur,
    InputHandler: passwordHandler,
    ResetHandler: passwordReset,
  } = useInput((password) => password.trim().length > 8);

  const {
    input: confirmPassword,
    Valid: confirmPasswordValid,
    invalid: confirmPasswordInvalid,
    blurHandler: confirmPasswordBlur,
    InputHandler: confirmPasswordHandler,
    ResetHandler: confirmPasswordReset,

  } = useInput((Cpassword) => Cpassword.trim().length > 1);

  const ctxUsersInfo = useContext(AuthUsersContext);

  const [Isnew, setIsNew] = useState(true);

  const isNewChangeHandler = () => {
    setIsNew((prev) => !prev);
    emailReset();
    fullNameReset();
    passwordReset();
    confirmPasswordReset();
  };

  const submitValidIsNew = Isnew
    ? fullNameValid == true &&
      passwordValid == true &&
      emailValid == true &&
      confirmPasswordValid == true
    : passwordValid == true && emailValid == true;

  const OnsubmitForm = (e) => {
    e.preventDefault();

    // console.log(fullNameValid, passwordValid, emailValid, confirmPasswordValid);

    // console.log(fullName, email, password, confirmPassword);

    if(Isnew === true){

      const NewuserData = {
        id: ctxUsersInfo.users.length + 1,
        name: fullName,
        email: email,
        password: password,
      }
      ctxUsersInfo.registerNewUser(NewuserData)
      console.log(ctxUsersInfo.users);
      console.log(ctxUsersInfo.login);
      
      
    }

    

    // navigate("./booking");
  };

  return (
    <div className={styles.container}>
      <img
        src={Isnew ? RegisterImage : loginImage}
        alt="Boxes Icon"
        className={styles.icon}
      />

      <h2 className={styles.title}>{Isnew ? "Register" : "Login"}</h2>
      <p className={styles.subtitle}>
        You are just a few steps away. Just provides some details below to
        register.
      </p>

      <div className={styles.formContainer}>
        <form onSubmit={OnsubmitForm} className={styles.form}>
          <label className={styles.label}>
            Email:
            <input
              value={email}
              onChange={emailHandler}
              onBlur={emailBlur}
              type="email"
              className={styles.input}
              placeholder="Enter your email"
            />
          </label>

          {Isnew && (
            <label className={styles.label}>
              Username:
              <input
                value={fullName}
                onChange={fullNameHandler}
                onBlur={fullNameBlur}
                type="text"
                className={styles.input}
                placeholder="Choose a username"
              />
            </label>
          )}

          <label className={styles.label}>
            Password:
            <input
              value={password}
              onChange={passwordHandler}
              onBlur={passwordBlur}
              type="password"
              className={styles.input}
              placeholder="Create password"
            />
          </label>

          {Isnew && (
            <label className={styles.label}>
              Confirm Password:
              <input
                value={confirmPassword}
                onChange={confirmPasswordHandler}
                onBlur={confirmPasswordBlur}
                type="password"
                className={styles.input}
                placeholder="Confirm password"
              />
            </label>
          )}

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              I accept the <a href="/">Terms of Service</a> and{" "}
              <a href="/">Privacy Policy</a>
            </label>
          </div>

          <button disabled={!submitValidIsNew} className={styles.submitButton}>
            Register
          </button>
          {Isnew ? (
            <p style={{ cursor: "pointer" }} onClick={isNewChangeHandler}>
              {" "}
              I have an acoount <span style={{ color: "white" }}>
                login
              </span>{" "}
            </p>
          ) : (
            <p style={{ cursor: "pointer" }} onClick={isNewChangeHandler}>
              {" "}
              Idont have an acoount{" "}
              <span style={{ color: "white" }}>create an account</span>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
