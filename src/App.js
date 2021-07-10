import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Header from "./Components/Header.js"

function App() {
  return (
    <Header/>
  );
}

export default App;
