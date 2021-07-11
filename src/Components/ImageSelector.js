import React from "react"
import "../styles/About.css"

function ImageSelector(props){
  let path = "img/";
  let filenumber = Math.floor(Math.random()*10) +1;
  path = path + filenumber.toString() + ".jpg";

  return(
    <><div>
    <img id="input-img" src={path}/>
    </div>
    </>
  );
}

export default ImageSelector;