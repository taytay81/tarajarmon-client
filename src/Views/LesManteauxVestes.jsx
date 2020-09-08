import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesManteauxVestes() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <h1 className="titre_article">MANTEAUX & VESTES</h1>
        <Articles type="manteauVeste"></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
