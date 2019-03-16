import React from "react";
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";

//Create 2 pages
//One route with component 
//Another with render
//Sub pages for page 2

class Exercise extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogin : false,
      userName : ""
    }
  }

  handleOnClick = (name) =>{
    
    this.setState({
      isLogin : true,      
      userName : name
    })
  }

  render(){
    return (
      <Router>
        <Link to="/login">Login</Link><br/>
        <Link to="/home">Home Page</Link><br/>
        <Link to="/home/subpage">Page 2 - Sub Page</Link>
        <Route exact path="/login" render={ props => this.state.isLogin ? <Redirect to="/home"/>:  <Login {...props} loginEvent={this.handleOnClick} />}></Route>
        <Route exact path="/home" render={ props =>  this.state.isLogin ? <Welcome {...props} /> : <Redirect to="/login"/>  } ></Route>
        <Route path={"/home/:id"} component={Page2Content}/>
      </Router>
    );
  }  
}

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username : ''
    }
  }

  handleOnChange = (e) =>{
    this.setState({
      username : e.target.value
    })
  }

  handleOnSubmit = (e) =>{
    const name = this.state.username;
    this.props.loginEvent(name);
    e.preventDefault();
  }

  render(){
      return (
        <React.Fragment>
        <h1>Login Page</h1>
        <form onSubmit = {this.handleOnSubmit}>
        <label>
          User Name: <input value={this.state.username} onChange={this.handleOnChange}></input>
        </label>
        <label>
          Password: <input type="password"></input>
        </label>
        <button type="submit">Login</button>
        </form>
        </React.Fragment>
    )
  }
  
}

class Welcome extends React.Component{
  render(){ 
      return (
      <div>Welcome {this.props.username}</div>
    )
  }
}

class Page2Content extends React.Component{
  render(){
    console.log(this.props.match.params);
    return (
      <div>Sub Page - {this.props.match.params.id}</div>
    )
  }
  
}

export default Exercise;

