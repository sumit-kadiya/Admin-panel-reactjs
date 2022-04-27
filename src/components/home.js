import React from "react";
import Card from "./card";
import classes from "./home.module.css";

const Home = (props) => {
  const [obj] = props.onShowCase.filter((el) => el.email === props.check);

  return (
    <Card className={classes.home}>
      <h1>
        Welcome! {obj.firstname} {obj.lastname}
      </h1>
    </Card>
  );
};

export default Home;
