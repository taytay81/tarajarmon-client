import React from 'react'
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NavBar";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";
import BreadCrum from "./../Components/Breadcrum";

export default function LesMailles() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Mailles", link: "/Mailles", separator: "" },
  ];
    return (
        <div>
      <NavBar></NavBar>
      <div className="page-content">
      <BreadCrum links={myLinks}></BreadCrum>
        <h1 className="titre_article">MAILLES</h1>
        <Articles type="maille" breadcrum={myLinks}></Articles>
      </div>
      <Footer></Footer>
    </div>
    )
}
