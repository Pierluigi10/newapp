import React from "react";
import image from "../data/image.json";

function Test(props) {
  return (
    <div className="test">
      <h1>{props.title}</h1>
      <img className="giacomo" src={image.image2} alt="Giacomo Capoccia" />
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Test;
