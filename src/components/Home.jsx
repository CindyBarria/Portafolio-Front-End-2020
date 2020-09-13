import React from "react";
import "../styles/Home.css";
import Fondo from "../assets/fondo1.jpg";
const Home = () => {
  return (
    <div className="inicio">
      <img className="img" src={Fondo} alt={"logo"} />
      <div className="title">
        <h1>Cindy Romina Barría</h1>
        <h2>Front-end Developer</h2>
      </div>
    </div>
  );
};

export default Home;
