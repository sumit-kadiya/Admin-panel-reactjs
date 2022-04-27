import React, { useState } from "react";
import Card from "./card";
import classes from "./form.module.css";

const Form = (props) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    institute: "",
    percentage: "",
    course: "",
    start: "",
    end: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const FormDataSetHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormIsValid(formData.email.includes("@"));
  };

  const formStep = () => {
    if (page === 1 && formIsValid) {
      alert("Form Submitted");
      const MainFormData = {
        ...formData,
        id: Math.random().toString(),
      };

      props.onSaveForm(MainFormData);
    } else {
      setPage((cur) => cur + 1);
    }
  };

  const PrevStep = () => {
    setPage((cur) => cur - 1);
  };

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder: "Phone No.",
      errorMessage: "It should be a valid Phone number",
      label: "Phone No.",
      required: true,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];
  const input2 = [
    {
      id: 7,
      name: "institute",
      type: "text",
      placeholder: "Institute/Collage",
      label: "Institute/Collage",
      required: true,
    },
    {
      id: 8,
      name: "percentage",
      type: "number",
      placeholder: "Percentage",

      label: "Percentage",

      required: true,
    },
    {
      id: 9,
      name: "course",
      type: "text",
      placeholder: "Course",

      label: "Course",
      required: true,
    },
    {
      id: 10,
      name: "start",
      type: "date",
      placeholder: "Start Date",

      label: "Start Date",
      required: true,
    },

    {
      id: 11,
      name: "end",
      type: "date",
      placeholder: "End Date",
      errorMessage: "Please Enter Valid Date",
      pattern: formData.end > formData.start,
      label: "End Date",

      required: true,
    },
  ];

  return (
    <Card className={classes.formcon}>
      <div className={classes.form}>
        {page === 0 && (
          <div className={classes.formInput}>
            <h1 className={classes.header}>Personal Information</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={FormDataSetHandler}
              />
            ))}
          </div>
        )}
      </div>
      <div className={classes.form}>
        {page === 1 && (
          <div className={classes.formInput}>
            <h1 className={classes.header}>Educational Information</h1>
            {input2.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={FormDataSetHandler}
              />
            ))}
          </div>
        )}
      </div>
      <div className={classes.footer}>
        <button
          onClick={PrevStep}
          type="button"
          className={page === 1 ? "" : classes.prev}
        >
          {page === 0 ? "" : "Prev"}
        </button>
        <button onClick={formStep} type="button" disabled={!formIsValid}>
          {page === 0 ? "Next" : "Submit"}
        </button>
      </div>
    </Card>
  );
};

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Form;
