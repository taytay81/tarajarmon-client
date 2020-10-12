import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import BreadCrum from "./../Components/Breadcrum";
import "../Styles/Articles.css";

export default function LesBas() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Bas", link: "/Bas", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">BAS</h1>
        <Articles type="Bas" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
