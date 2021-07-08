import React, { Component } from "react";
import { Link } from "react-router-dom";
import Countries from "../data/Countries";
import validator from "validator";
import { connect } from "react-redux";
import { addUser } from "../actions/UserActions";
import { save } from "../actions/SaveActions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: "",
      phoneError: "",
      passError: "",
      error: "",
      obj: {
        id: 0,
        name: "",
        gender: "",
        country: "",
        email: "",
        phone: "",
        password: "",
        description: ""
      }
    };
  }
  render() {
    const { save, addUser } = this.props;

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
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
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
        // console.log(this.state.obj);
        save(obj);
        addUser(obj);
        this.props.history.push("/result");
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
            <h1>Add User Form</h1>
          </center>
          <div>
            <label> Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.obj.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label> Gender: </label>
            <input
              id="gender"
              name="gender"
              type="radio"
              value="Male"
              onChange={handleInputChange}
              required
            />
            Male
            <input
              id="gender"
              name="gender"
              type="radio"
              value="Female"
              onChange={handleInputChange}
            />
            Female
            <input
              id="gender"
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
              id="email"
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
              id="phone"
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
              id="password"
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
              id="description"
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

export default connect(null, { save, addUser })(Form);
