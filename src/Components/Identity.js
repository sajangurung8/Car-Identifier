import React from "react"
import "../styles/About.css"

function Identity(props){
  return(
    <>
    <div>
    <img src={props.source} width="400" height="400"/>
    <h2>{props.name}</h2>
    </div>
    </>
  );
}

export default Identity;
