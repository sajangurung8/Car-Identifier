import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../styles/App.css';
import Home from "./Home.js";
import About from "./About.js";

function Header(){
  return(
    <Router>
    <div className="App">
      <nav className="main-nav">
        <Link className="nav-link" to= "/">Car Identifier</Link>
        <Link className="nav-link" to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default Header;
