import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";
import BreadCrum from "./../Components/Breadcrum";

export default function LesRobes() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Robes", link: "/LesRobes", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">ROBES</h1>
        <Articles type="robes" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
