import React, { Component } from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import BreadCrum from "./../Components/Breadcrum";
import "../Styles/Articles.css";

export default class Nouveautes extends Component {
  render() {
    const myLinks = [
      { name: "Accueil", link: "/home", separator: ">" },
      { name: "New In", link: "/Nouveautes", separator: "" },
    ];
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <BreadCrum links={myLinks}></BreadCrum>
          <h1 className="titre_article">NEW IN</h1>
          <Articles type="newIn" breadcrum={myLinks}></Articles>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
