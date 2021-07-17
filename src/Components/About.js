import React from "react";
import Identity from "./Identity.js"
import "../styles/About.css"

function About(){
  return(
    <>
    <h1>About this application</h1>
    <p>This web app is designed using React.js to explore concepts of web appliction and utilizing a trained Machine Learing model for car identification.</p>
    <p>
The web application works by taking an image as an input from either the user’s camera or a picture on their local drive. It will then predict the year, make, and model of the vehicle.<br/>
ML model was created using Google Cloud’s AutoML Vision and trained on the Stanford Car data set.</p>
    <p>You are able to upload a picture from your computer or even take a picture with on a mobile device using choose file button. <br/>In case you do not have a car in front of you and want to test this applicaion, a picture of a car is auto selected for your convenince.<br/>
    In case you upload a picture of a car that our model have difficulty predicting or even a picture with no car, this web app will provide you with 3 highest probabilities.<br/>
    Any prediction less than 90% accuracy is considered not accurate enough and will display 3 highest predictions<br/>We hope that you will enjoy using our app.</p>
    <h1>About the Creators</h1>
    <p>During their time in Microsoft Software and Systems Academy, Sajan and Ean realized their common interest in Machine Learning and collaborated to create this Web application.</p>

<div className="pics-row">
    <Identity id="s-pic" source="img/sajan.jpg" name="Sajan Gurung" height="300"  width="300"/>
    <Identity id="e-pic" source="img/ean.jpg" name="Ean Pfeiffer" height="300"  width="300"/>
</div>
    </>
  );
}

export default About;
