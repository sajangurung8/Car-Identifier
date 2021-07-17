import React from "react"
import "../styles/App.css"

function ImageSelector(props){
  let path = "img/";
  let filenumber = Math.floor(Math.random()*10) +1;
  path = path + filenumber.toString() + ".jpg";

  return(
    <><div>
    <img id="input-img" src={path}  height="300" width="auto" alt="."/>
    </div>
    </>
  );
}

export default ImageSelector;
