import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import '../styles/App.css';
import Home from "./Home.js";
import About from "./About.js";
import Dataset from "./Dataset.js";
import NotFound from "./NotFound.js";

function Header(){
  return(
    <Router>
    <div className="App">
      <nav id= "myTopnav" className="main-nav">
        <Link className="nav-link" to= "/">Car Identifier</Link>
        <Link className="nav-link" to="/dataset">Dataset</Link>
        <Link className="nav-link" to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/dataset">
          <Dataset/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/404">
        <NotFound/>
        </Route>
        <Redirect to="/404"/>
      </Switch>
    </div>
    </Router>
  );
}


export default Header;
