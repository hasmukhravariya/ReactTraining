import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../Store";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      country: "",
      email: "",
      phone: "",
      password: "",
      description: "",
      error: ""
    };
  }
  componentDidMount() {
    const temp = store.getState();
    this.setState({
      name: temp.save.name,
      gender: temp.save.gender,
      country: temp.save.country,
      email: temp.save.email,
      phone: temp.save.phone,
      password: temp.save.password,
      description: temp.save.description,
      error: temp.save.error
    });
  }

  render() {
    return (
      <div className="center">
        <div className="container">
          <center>
            {" "}
            <h1> Form Details</h1>{" "}
          </center>
          <div>
            <strong>Name:</strong> {this.state.name}
          </div>
          <div>
            <strong>Gender:</strong> {this.state.gender}
          </div>
          <div>
            <strong>Country:</strong> {this.state.country}
          </div>
          <div>
            <strong>Email:</strong> {this.state.email}
          </div>
          <div>
            <strong>Phone Number:</strong> {this.state.phone}
          </div>
          <div>
            <strong>Password:</strong> {this.state.password}
          </div>
          <div>
            <strong>Description:</strong> {this.state.description}
          </div>
          <Link to={{ pathname: "/" }} className="button">
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default Result;
