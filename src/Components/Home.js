import {React, Component} from "react";
import * as automl from "@tensorflow/tfjs-automl";
import * as ts from "@tensorflow/tfjs";

class Home extends Component{


render(){
  return(
    <>
    <h1>Car Identifier Wep application</h1>
    <img id="daisy" crossOrigin="anonymous" src="https://storage.googleapis.com/tfjs-testing/tfjs-automl/img_classification/daisy.jpg"/><br/>
    <input id="fileElem" type="file" accept="image/*" /><br/>
    <button id="predictBtn" onClick={loadModel} >Predict</button>
    <div id="preview"></div>
    </>
  );
}

}

async function loadModel(){

  const model = await automl.loadImageClassification('model.json');
  const image = document.getElementById('daisy');
  const predictions = await model.classify(image);
  var result = await getLabel(predictions);
  console.log(result);

// Show the resulting object on the page.
  let pre = document.createElement('h1');
  pre.innerHTML = result;
  document.body.append(pre);
}

async function getLabel(predictions){
  let result = "Prediction not complete!";
  let highProb = predictions[0].prob;
  for(let i = 0; i<predictions.length; i++){
    if(predictions[i].prob > highProb){
      highProb =predictions[i].prob;
      result = predictions[i].label;
      console.log(highProb);
    }
  }
  return result;
}

export default Home;
