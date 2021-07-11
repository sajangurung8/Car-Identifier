import React from "react";
import Identity from "./Identity.js"
import "../styles/About.css"

function Dataset(){
  return(
    <>
    <h1>Dataset Used</h1>
    <p>We used Standford university's Cars Dataset to train and validate our image classification model using tensor flow.</p>
    <p>Cars dataset contains 16,185 umages of several diffrent classes of car, which is spit almost evenly into training and validating data.
    You can click <a href="https://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank">here</a> to download and examine the dataset. </p>
    <p><strong>Following are 3 examples from the dataset with the label:</strong></p>
    <div class="pics-row">
        <Identity source="img/bmw.jpg" name="BMW 6 Series Convertible 2007" height="200"  width="300"/>
        <Identity source="img/acura.jpg" name="Acura TL Sedan 2012" height="200"  width="300"/>
        <Identity source="img/hummer.jpg" name="AM General Hummer SUV 2000" height="200"  width="300"/>
    </div>
    </>
  );
}

export default Dataset;
