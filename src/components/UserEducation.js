import React from "react";
import Card from "./card";
import classes from "./table.module.css";

const UserEducation = (props) => {
  const arr = props.item.filter((el) => el.email === props.check);

  return (
    <Card className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School/Institute</th>
            <th>Course</th>
            <th>Percentage</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element) => (
            <tr key={element.id}>
              <td>{element.firstname}</td>
              <td>{element.lastname}</td>
              <td>{element.institute}</td>
              <td>{element.course}</td>
              <td>{element.percentage}</td>
              <td>{element.start}</td>
              <td>{element.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UserEducation;
