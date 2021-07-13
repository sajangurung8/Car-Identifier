import React from "react";
import Identity from "./Identity.js"
import "../styles/About.css"

function Dataset(){
  return(
    <>
    <h1>Dataset Used</h1>
    <p>We used the Stanford Cars Dataset to train and validate our image classification model using tensor flow.</p>
    <p>The dataset contains 16,185 images of several different classes of vehicles, what are split into training and validating dat. You can click <a href="https://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank">here</a> to download and examine the dataset. </p>
    <p><strong>Following are 3 examples from the dataset with the label:</strong></p>
    <div className="pics-row">
        <Identity source="img/bmw.jpg" name="BMW 6 Series Convertible 2007" height="200"  width="300"/>
        <Identity source="img/acura.jpg" name="Acura TL Sedan 2012" height="200"  width="300"/>
        <Identity source="img/hummer.jpg" name="AM General Hummer SUV 2000" height="200"  width="300"/>
    </div>
    <p>Concepts form follwing refrences are utilized in analyzing data while training and validation of our model. </p>
    <h2>References:</h2>
    <p>3D Object Representations for Fine-Grained Categorization<br/>
Jonathan Krause, Michael Stark, Jia Deng, Li Fei-Fei<br/>
4th IEEE Workshop on 3D Representation and Recognition, at ICCV 2013 (3dRR-13). Sydney, Australia. Dec. 8, 2013</p>
    </>
  );
}

export default Dataset;
