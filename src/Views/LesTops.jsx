import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";
import BreadCrum from "./../Components/Breadcrum";

export default function LesTops() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Tops", link: "/Tops", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">TOPS</h1>
        <Articles type="top" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
