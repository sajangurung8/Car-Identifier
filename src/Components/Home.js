import {React, Component} from "react"
import * as automl from "@tensorflow/tfjs-automl";
import * as ts from "@tensorflow/tfjs";
import ImageSelector from "./ImageSelector.js";
import '../styles/App.css';

class Home extends Component{
render(){
  return(
    <>
    <h1>Car Identifier Web application</h1>

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
  var dict = {};
  dict["first"] = predictions[0];
  dict["second"] = predictions[0];
  dict["third"] = predictions[0];
  for(let i = 0; i<predictions.length; i++){
    if(predictions[i].prob >= dict["first"].prob){
      dict["first"] = predictions[i];
      continue;
    }
    if(predictions[i].prob >= dict["second"].prob){
      dict["second"] = predictions[i];
      continue;
    }
    if(predictions[i].prob >= dict["third"].prob){
      dict["third"] = predictions[i];
      continue;
    }
  }
  var first = dict["first"];
  var second =dict["second"];
  var third=dict["third"];
  if(first.prob>0.90)
    return first.label;
  else if(second.prob>0.9)
    return second.label;
  else if(third.prob>0.9)
    return third.label;
  return "<p>Our model could not accurately classify this image to one of the cars in Dataset, top 3 possibilities with probability is as follows:<br>"
        +first.prob.toFixed(2) * 100 +"% chance its " +first.label + "<br>"
        +second.prob.toFixed(2) * 100 +"% chance its "+ second.label + "<br>"
        +third.prob.toFixed(2) * 100 +"% chance its"+ third.label+"</p>";
}

export default Home;
