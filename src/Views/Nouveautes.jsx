import React, { Component } from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Articles from "../Components/affichage/Articles";
import "../Styles/Articles.css";

export default class Nouveautes extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <h1 className="titre_article">NEW IN</h1>
          <Articles type="newIn"></Articles>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
