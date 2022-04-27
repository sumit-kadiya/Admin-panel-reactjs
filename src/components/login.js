import React, { useState } from "react";
import styles from "./login.module.css";
import Card from "./card";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const EML = props.items.map((el) => el.email);
  const PWD = props.items.map((el) => el.password);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(EML.includes(event.target.value));

    props.comingData(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(PWD.includes(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.home}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.formInput}>
          <h1 className={styles.header}>Login</h1>
          <label htmlFor="e-mail">E-Mail</label>
          <input
            type="email"
            id="e-mail"
            value={enteredEmail}
            onChange={emailChangeHandler}
            pattern={EML}
          />
          <span className={styles.span}>Incorrect Username</span>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            pattern={PWD}
          />
          <span className={styles.span}>Incorrect Password</span>

          <div className={styles.links}>
            <a href="/">Forgot Password ?</a>
            <a href="/" onClick={props.onHandle}>
              Create an Account
            </a>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
