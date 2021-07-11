import {React, Component} from "react";
import * as automl from "@tensorflow/tfjs-automl";
import * as ts from "@tensorflow/tfjs";
import ImageSelector from "./ImageSelector.js";
import '../styles/App.css';

class Home extends Component{


render(){
  return(
    <>
    <h1>Car Identifier Wep application</h1>

    <ImageSelector/>
    <input id="fileLoader" type="file" accept="image/*" onChange = {viewImage}/><br/>
    <button className="button" id="predictBtn" onClick={loadModel} >Predict</button>
    <div id="preview"><h2 id="res"></h2></div>
    </>
  );
}

}

function viewImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("fileLoader").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("input-img").src = oFREvent.target.result;
        };
    };

async function loadModel(){
  const model = await automl.loadImageClassification('model.json');
  const image = document.getElementById('input-img');
  const predictions = await model.classify(image);
  var result = await getLabel(predictions);
  document.getElementById('res').innerHTML = result;
}

async function getLabel(predictions){
  let result = "Could not predict!";
  let highProb = predictions[0].prob;
  for(let i = 0; i<predictions.length; i++){
    if(predictions[i].prob >= highProb){
      highProb =predictions[i].prob;
      result = predictions[i].label;
    }
  }
  if(highProb<0.89)
    result = "Could not predict, it might not be a flower.";
  return result;
}

export default Home;
