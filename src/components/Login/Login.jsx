import React, { useContext, useState } from "react";
import LoginStyle from "./Login.module.css";
import logo from "../../Assets/logo 1.png";
import Auth from "../../store/ContextAuth/Auth";
import useInput from "../../Hooks/Input/useInput";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const ctx = useContext(Auth);
  const {
    input: gmail,
    InputHandler: GmailHandler,
    Valid: gmailValid,
    invalid: InvalidGmail,
    blurHandler: GmailBlur,
    ResetHandler: GmailReset,
  } = useInput((email) => email.includes("@"));

  const {
    input: password,
    InputHandler: PassworHandler,
    Valid: PasswordValid,
    invalid: PasswordInvalid,
    blurHandler: PasswordBlur,
    ResetHandler: PasswordReset,
  } = useInput((password) => password.trim().length > 6);

  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const SubmitValid = gmailValid && PasswordValid;

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dash");
    const foundeEmails = ctx.Admins.find((user) => {
      if (user.email) return user.email === gmail;
    });

    const foundePassword = ctx.Admins.find((user) => {
      return user.password === password;
    });

    if (!foundeEmails) {
      setError(true);
      return;
    }
    if (!foundePassword) {
      setError(true);
      return;
    }

    GmailReset();
    PasswordReset();

    ctx.setLogin(true);
  };

  return (
    <>
      <div className={LoginStyle.LoginContainer}>
        <div className={LoginStyle.InnerLoginContainer}>
          <img src={logo} alt="" />

          <h1> Admin </h1>
          <form onSubmit={submitHandler}>
            {Error && <p> Somthing Wrong</p>}
            <input
              type="email"
              onChange={GmailHandler}
              onBlur={GmailBlur}
              value={gmail}
            />
            <input
              type="password"
              onChange={PassworHandler}
              value={password}
              onBlur={PasswordBlur}
            />
            <button disabled={!SubmitValid}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
