import React from "react";
import NavBar from "./../Components/NavBar";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesRobes() {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="titre_article">ROBES</h1>
      <Articles type="robes"></Articles>
    </div>
  );
}
