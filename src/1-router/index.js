import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav';
import {Home,About} from './StaticPages';
//import Topics from './Topics';

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

function Topics({ match }) {
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.<span>test</span></h3>}
      />
    </div>
  );
}

function Topic(props){
    console.log("match",props.match);
    console.log("location",props.location);
    console.log("history",props.history)
    return (
      <div>
        <h3>{props.match.params.topicId}</h3>
      </div>
    );
  }

//Documentation 
// https://reacttraining.com/react-router/web/guides/quick-start

//Other routers
//https://reactjs.org/community/routing.html

export default BasicExample;
