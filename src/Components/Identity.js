import React from "react"
import "../styles/About.css"

function Identity(props){
  return(
    <>
    <div>
    <img src={props.source} width={props.width} height={props.height}/>
    <h3>{props.name}</h3>
    </div>
    </>
  );
}

export default Identity;
