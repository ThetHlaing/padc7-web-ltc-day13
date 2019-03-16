import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav';
import {Home,About} from './StaticPages';
import Topics from './Topics';

function BasicExample() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route
          exact
          path="/"
          component={props => <Home {...props} name="Thet Hlaing" />}
        />
        <Route path="/about" component={About} />
        <Route path="/topics" render={(props) => <Topics {...props}/>} />
      </div>
    </Router>
  );
}

//Documentation 
// https://reacttraining.com/react-router/web/guides/quick-start

//Other routers
//https://reactjs.org/community/routing.html

export default BasicExample;
