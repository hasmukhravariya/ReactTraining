import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from "./Form"
import Home from "./Home"
import Result from "./Result"
const Routes = () => (
    <Router>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/result" component={Result} />
    </Router>
);

export default Routes;