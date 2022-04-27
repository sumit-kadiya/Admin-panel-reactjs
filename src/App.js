import React, { useState } from "react";
import Form from "./components/form";
import Home from "./components/home";
import Login from "./components/login";
import UserDetails from "./components/UserDetails";
import UserEducation from "./components/UserEducation";
import classes from "./App.module.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClickIn, setIsClickIn] = useState(false);
  const [isUserIn, setIsUserIn] = useState(false);
  const [isUserEduIn, setIsUserEduIn] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  // data coming from registration form
  const saveFormHandler = (rcvdData) => {
    console.log(rcvdData);
    setData((prevData) => {
      return [rcvdData, ...prevData];
    });
  };

  const regHandle = (e) => {
    e.preventDefault();
    if (isClickIn === false) {
      setIsClickIn(true);
    } else {
      setIsClickIn(false);
    }
  };
  const userHandler = (e) => {
    e.preventDefault();
    if (isUserIn === false) {
      setIsUserIn(true);
    } else {
      setIsUserIn(false);
    }
  };
  const userEduHandler = (e) => {
    e.preventDefault();
    if (isUserEduIn === false) {
      setIsUserEduIn(true);
    } else {
      setIsUserEduIn(false);
    }
  };

  const SomeDataHandler = (rcvdEmail) => {
    setEmail(rcvdEmail);
  };
  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <h2 className={classes.heading}>Admin Panel</h2>
        <div className={classes.buttons}>
          {!isLoggedIn && <button onClick={regHandle}>Register</button>}
          {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
          {isLoggedIn && <button onClick={userHandler}>User</button>}
          {isLoggedIn && <button onClick={userEduHandler}>Education</button>}
          {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
        </div>
      </div>
      {!isLoggedIn && !isClickIn && (
        <Login
          onLogin={loginHandler}
          onHandle={regHandle}
          items={data}
          comingData={SomeDataHandler}
        />
      )}
      {isLoggedIn && !isUserIn && !isUserEduIn && (
        <Home onLogout={logoutHandler} onShowCase={data} check={email} />
      )}
      {isClickIn && !isLoggedIn && <Form onSaveForm={saveFormHandler} />}
      {isUserIn && !isUserEduIn && isLoggedIn && (
        <UserDetails item={data} check={email} />
      )}
      {isUserEduIn && !isUserIn && isLoggedIn && (
        <UserEducation item={data} check={email} />
      )}
    </React.Fragment>
  );
}

export default App;
