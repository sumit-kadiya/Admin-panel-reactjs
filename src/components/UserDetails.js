import React from "react";
import classes from "./table.module.css";
import Card from "./card";

const UserDetails = (props) => {
  const arr = props.item.filter((el) => el.email === props.check);
  return (
    <Card className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element) => (
            <tr key={element.id}>
              <td>{element.firstname}</td>
              <td>{element.lastname}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UserDetails;
