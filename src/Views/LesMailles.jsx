import React from 'react'
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NavBar";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default function LesMailles() {
    return (
        <div>
      <NavBar></NavBar>
      <div className="page-content">
        <h1 className="titre_article">MAILLES</h1>
        <Articles type="maille"></Articles>
      </div>
      <Footer></Footer>
    </div>
    )
}
