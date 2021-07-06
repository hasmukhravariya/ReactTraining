import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../index.css";
import PropTypes from "prop-types";
import { getUsers, deleteUser } from "../actions/UserActions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      gender: "",
      country: "",
      email: "",
      phone: "",
      password: "",
      description: ""
    };
  }

  static propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUsers();
  }

  editDetails = (data) => {
    const user = {
      name: data.name,
      id: data.id,
      gender: data.gender,
      country: data.country,
      email: data.email,
      phone: data.phone,
      password: data.password,
      description: data.description
    };
    this.props.history.push({
      pathname: "/updateform",
      state: user
    });
  };

  deleteEmployee = (id) => {
    if (window.confirm("Are you sure?")) {
      this.props.deleteUser(id);
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Users Detail Table</h1>
        </header>
        <div className="center_horizontal">
          <table align="center" border="2">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Email Id</th>
                <th>Phone No.</th>
                <th>Description</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users &&
                this.props.users.map((data, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.gender}</td>
                      <td>{data.country}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.description}</td>
                      <td>
                        <button onClick={() => this.editDetails(data)}>
                          EDIT
                        </button>{" "}
                        <button onClick={() => this.deleteEmployee(data.id)}>
                          DELETE
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <Link to={{ pathname: "/" }} className="button">
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users
});

export default withRouter(
  connect(mapStateToProps, {
    getUsers,
    deleteUser
  })(App)
);
