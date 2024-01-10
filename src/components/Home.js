import React from "react";
import { getUsername, getCity } from "../data/user";

function Home() {
  const username = getUsername();
  const city = getCity ();
  
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
