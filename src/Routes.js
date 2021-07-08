import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./component/Home";
import Result from "./component/Result";
import Form from "./component/Form";
import AllUsers from "./component/AllUsers";
import UpdateForm from "./component/UpdateForm";
const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/result" component={Result} />
        <Route path="/allusers" component={AllUsers} />
        <Route path="/updateform" component={UpdateForm} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
