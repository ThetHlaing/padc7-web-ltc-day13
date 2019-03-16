import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Nav(props){
    return (
        <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        </React.Fragment>
    )
}

export default Nav;