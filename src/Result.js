import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  const { name, gender, country, email, phone, password, description } =
    (props.location && props.location.state) || {};
  return (
    <div className="center">
      <div className="container">
        <center>
          {" "}
          <h1> Form Details</h1>{" "}
        </center>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Gender:</strong> {gender}
        </div>
        <div>
          <strong>Country:</strong> {country}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Phone Number:</strong> {phone}
        </div>
        <div>
          <strong>Password:</strong> {password}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
        <Link to={{ pathname: "/form" }} className="button">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Result;
