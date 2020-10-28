import React, { Component } from "react";
import Articles from "../Components/affichage/Articles";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import BreadCrum from "./../Components/Breadcrum";
import "../Styles/Page.css";
export default class Resultats extends Component {
  state = {
    element: "",
  };
  componentDidMount() {
    console.log(this.props.match.params.parametres);
    this.setState({ element: this.props.match.params.parametres });
  }
  //on doit implementer le update pour mettre a jour la page lorsque on refait une nouvelle recherche
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.parametres !== prevProps.match.params.parametres
    ) {
      this.setState({ element: this.props.match.params.parametres });
    }
  }

  render() {
    const myLinks = [
      { name: "Accueil", link: "/home", separator: ">" },
      { name: " Resultats de recherche", link: "/Resultat/"+this.state.element, separator: "" },
    ];
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
        <BreadCrum links={myLinks}></BreadCrum>
          <div className="resultat-recheche-titre">
            <h1>RÉSULTATS DE RECHERCHE POUR "{this.state.element}" </h1>
          </div>

          <Articles recherche={this.state.element} breadcrum={myLinks}></Articles>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
