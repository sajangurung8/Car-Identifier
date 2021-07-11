import React from "react";
import * as automl from "@tensorflow/tfjs-automl";

function Home(){

  return(
    <>
    <h1>Car Identifier Wep application</h1>
    <input id="fileElem" type="file" accept="image/*" />

    <button id="predictBtn" >Predict</button>
    <div id="preview"></div>
    </>
  );
}

export default Home;
