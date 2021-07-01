import "./index.css";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Countries from "./Countries";
import validator from "validator";

const Form = (props) => {
  let history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");
  const [state, setState] = useState({
    name: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    description: "",
    error: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      if (validator.isEmail(value)) {
        setEmailError("");
      } else {
        setEmailError("Invalid Email!");
      }
    }

    if (name === "phone") {
      if (validator.isMobilePhone(value, ["en-IN"])) {
        setPhoneError("");
      } else {
        setPhoneError("Invalid Number");
      }
    }
    if (name === "password") {
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        })
      ) {
        setPassError("");
      } else {
        setPassError("Is not strong Password");
      }
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if (emailError.length > 0) {
      state.error = "Email is Invalid";
      setState({ ...state });
    } else if (passError.length > 0) {
      state.error = "Password is Invalid";
      setState({ ...state });
    } else if (phoneError.length > 0) {
      state.error = "Phone Number is Invalid";
      setState({ ...state });
    } else if (state.country.length === 0) {
      state.error = "Country Not selected";
      setState({ ...state });
    } else {
      state.error = "";
      setState({ ...state });
    }

    if (state.error.length > 0) {
      alert(state.error);
      return false;
    } else {
      history.push({
        pathname: "/result",
        state: state
      });
    }
  };

  let options = null;
  options = Countries.country.map((e, key) => (
    <option key={key} value={e.name}>
      {e.name}
    </option>
  ));

  return (
    <div className="center">
      <form onSubmit={mySubmitHandler} className="container">
        <center>
          {" "}
          <h1>Form</h1>{" "}
        </center>
        <div>
          <label> Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label> Gender: </label>
          <input
            id="male"
            name="gender"
            type="radio"
            value="Male"
            onChange={handleInputChange}
            required
          />
          Male
          <input
            id="female"
            name="gender"
            type="radio"
            value="Female"
            onChange={handleInputChange}
          />
          Female
          <input
            id="others"
            name="gender"
            type="radio"
            value="Others"
            onChange={handleInputChange}
          />
          Others
        </div>

        <div>
          <label>Country: </label>
          <select
            id="country"
            name="country"
            onChange={handleInputChange}
            required
          >
            {options}
          </select>
        </div>
        <div>
          <label>Enter Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            required
          />
          <label className="error">{emailError}</label>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            onChange={handleInputChange}
            required
          />
          <label className="error">{phoneError}</label>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            required
          />
          <label className="error">{passError}</label>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" className="button" />
          <Link to={{ pathname: "/" }} className="button">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
