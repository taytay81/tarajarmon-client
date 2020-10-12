import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "./../Components/Footer";
import BreadCrum from "./../Components/Breadcrum";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesManteauxVestes() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Manteaux & Vestes", link: "/ManteauxVestes", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">MANTEAUX & VESTES</h1>
        <Articles type="manteauVeste" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
