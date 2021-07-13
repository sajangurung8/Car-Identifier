import React from "react";
import Identity from "./Identity.js"
import "../styles/About.css"

function About(){
  return(
    <>
    <h1>About this application</h1>
    <p>This Web app is designed using React to explore concepts of utilizing Machine Learing for object identification.</p>
    <h1>About the developers</h1>
    <p>During their time in Microsoft Software and Systems Academy, Sajan and Ean realized their common interest in Machine Learning and collaborated to create this Web application.<br/>
The web application works by taking an image as an input from either the user’s camera or a picture on their local drive. The web application will then predict the year, make, and model of the vehicle.<br/>
The web application utilizes a training model, which was created using the Stanford Car data set and Google Cloud’s AutoML Vision.</p>

<div className="pics-row">
    <Identity id="s-pic" source="img/sajan.jpg" name="Sajan Gurung" height="300"  width="300"/>
    <Identity id="e-pic" source="img/ean.jpg" name="Ean Pfeiffer" height="300"  width="300"/>
</div>
    </>
  );
}

export default About;
