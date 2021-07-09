import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import validator from "validator";
import Countries from "../data/Countries";
import PropTypes from "prop-types";
import { editUser } from "../actions/UserActions";
import { connect } from "react-redux";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: "",
      phoneError: "",
      passError: "",
      error: "",
      obj: {
        name: this.props.location.state.name,
        id: this.props.location.state.id,
        gender: this.props.location.state.gender,
        country: this.props.location.state.country,
        email: this.props.location.state.email,
        phone: this.props.location.state.phone,
        password: this.props.location.state.password,
        description: this.props.location.state.description
      }
    };
  }

  static propTypes = {
    editUser: PropTypes.func.isRequired
  };

  render() {
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === "email") {
        if (validator.isEmail(value)) {
          this.setState({ emailError: "" });
        } else {
          this.setState({ emailError: "Invalid Email ID!" });
        }
      }

      if (name === "phone") {
        if (validator.isMobilePhone(value, ["en-IN"])) {
          this.setState({ phoneError: "" });
        } else {
          this.setState({ phoneError: "Invalid Phone Number" });
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
          this.setState({ passError: "" });
        } else {
          this.setState({ passError: "Not Strong Password" });
        }
      }
      this.setState((prevState) => ({
        obj: {
          ...prevState.obj,
          [name]: value
        }
      }));
    };

    const mySubmitHandler = (event) => {
      event.preventDefault();
      var temperror = "";
      if (this.state.emailError.length > 0) {
        temperror = "Email is Invalid";
      } else if (this.state.passError.length > 0) {
        temperror = "Password is Invalid";
      } else if (this.state.phoneError.length > 0) {
        temperror = "Phone Number is Invalid";
      } else if (this.state.obj.country.length === 0) {
        temperror = "Country Not selected";
      } else {
        temperror = "";
      }

      if (temperror.length > 0) {
        alert(temperror);
        return false;
      } else {
        const obj = this.state.obj;
        console.log(obj);
        this.props.editUser(obj);
        this.props.history.push("/allusers");
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
            <h1>Edit User Details Form</h1>{" "}
          </center>
          <div>
            <label> Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={this.state.obj.name}
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
              checked={this.state.obj.gender === "Male"}
              onChange={handleInputChange}
              required
            />
            Male
            <input
              id="female"
              name="gender"
              type="radio"
              value="Female"
              checked={this.state.obj.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
            <input
              id="others"
              name="gender"
              type="radio"
              value="Others"
              checked={this.state.obj.gender === "Others"}
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
              defaultValue={this.state.obj.country}
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
              value={this.state.obj.email}
              onChange={handleInputChange}
              required
            />
            <label className="error">{this.state.emailError}</label>
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={this.state.obj.phone}
              onChange={handleInputChange}
              required
            />
            <label className="error">{this.state.phoneError}</label>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.obj.password}
              onChange={handleInputChange}
              required
            />
            <label className="error">{this.state.passError}</label>
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              rows="4"
              cols="50"
              onChange={handleInputChange}
              value={this.state.obj.description}
              required
            ></textarea>
          </div>
          <div>
            <input type="submit" className="button" />
            <Link to="/" className="button">
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { editUser })(UpdateForm);
