import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    console.log("location",props.location);
    console.log("history",props.history)
    return (
      <div>
        <h3>{props.match.params.topicId}</h3>
      </div>
    );
  }


export default Topics