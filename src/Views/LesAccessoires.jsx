import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import BreadCrum from "./../Components/Breadcrum";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesAccessoires() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Accessoires", link: "/Accessoires", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">ACCESSOIRES</h1>
        <Articles type="accessoire" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
