import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import FormCouleur from "../../Components/forms/FormCouleur";
import Footer from "../../Components/Footer";
import "../../Styles/table.css";
export default class AjoutCouleur extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
        <FormCouleur></FormCouleur>
        </div>
       
        <Footer></Footer>
      </div>
    );
  }
}
