import React from "react";
import Identity from "./Identity.js"
import "../styles/About.css"

function About(){
  return(
    <>
    <h1>About this application</h1>
    <p>This Web app is designed using React to explore concepts of Web Applicaton.</p>
    <h1>About the developers</h1>
    <p>During thier time in MSSA, Sajan and Ean realized thier common intrest on Machine Learning and collaborated to create this Web applicaton <br/>to take image as an input, either from user's camera or a picture of a car on local drive to
    predict the year, make and model of the car.</p>
    <p>We are utiliging a pre existing dataset from Standford Univeristy which we have stored in a google cloud storage to train a model and using tensorflow.js to predict a car</p>
<div id="devpics">
    <Identity source="img/ean.jpg" name="Ean Pfeiffer"/>
    <Identity source="img/sajan.jpg" name="Sajan Gurung"/>
</div>
    </>
  );
}

export default About;
