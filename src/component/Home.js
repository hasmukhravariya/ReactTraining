import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Home extends Component {
  render(){
    return (
      <div className="center">
        <Link to="/form" id="add" className="button">Add User</Link>
        <Link to="/allusers" id="view" className="button">View Users</Link>
      </div>
    );
  } 
}
