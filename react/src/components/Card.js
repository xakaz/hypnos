import React from "react";

const Card = (props) => (
  <div className="mt-3">
    <div className="card" style={{"width": "18rem"}}>
      <img src={props.image} className="card-img-top rounded shadow" alt="reception"/>
      <div className="card-body" style={{minHeight: "200px", fontSize:"15px"}}>
        < h5 className="card-title text-center">{props.title}</h5>
        <hr />
        <p className="card-text">{props.description}</p> 
      </div>
    </div>
  </div>
);

export default Card;