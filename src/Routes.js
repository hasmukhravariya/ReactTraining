import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Result from "./component/Result";
import Form from "./component/Form";
import AllUsers from "./component/AllUsers";
import UpdateForm from "./component/UpdateForm";

class Routes extends Component{
  render(){
    return(
      <div>
        <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/form" component={Form} />
    <Route exact path="/result" component={Result} />
    <Route exact path="/allusers" component={AllUsers} />
    <Route exact path="/updateform" component={UpdateForm} />
  </Router>
      </div>
    )   
  }
}

export default Routes;