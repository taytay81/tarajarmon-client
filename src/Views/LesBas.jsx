import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesBas() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="page-content">
        <h1 className="titre_article">BAS</h1>
        <Articles type="maille"></Articles>
      </div>
      <Footer></Footer>
    </div>
  );
}
