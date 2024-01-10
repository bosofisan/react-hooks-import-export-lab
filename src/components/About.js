import React from "react";
import { getImage } from "../data/user";

function About() {
  const image = getImage ();
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;