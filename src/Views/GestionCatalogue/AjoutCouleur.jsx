import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import FormCouleur from "../../Components/forms/FormCouleur";
import Footer from "../../Components/Footer";

export default class AjoutCouleur extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <FormCouleur></FormCouleur>
        <Footer></Footer>
      </div>
    );
  }
}
