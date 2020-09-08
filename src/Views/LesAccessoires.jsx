import React from "react";
import NavBar from "./../Components/NavBar";import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesAccessoires() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <h1 className="titre_article">ACCESSOIRES</h1>
        <Articles type="accessoire"></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
