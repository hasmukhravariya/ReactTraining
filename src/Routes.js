import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Result from "./component/Result";
import Form from "./component/Form";
import AllUsers from "./component/AllUsers";
import UpdateForm from "./component/UpdateForm";
const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/form" component={Form} />
    <Route path="/result" component={Result} />
    <Route path="/allusers" component={AllUsers} />
    <Route path="/updateform" component={UpdateForm} />
  </Router>
);

export default Routes;
