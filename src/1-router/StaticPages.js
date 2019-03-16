import React from "react";

function Home(props) {
  return (
    <div>
      <h2>Welcome home ! {props.name}</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export {Home,About}