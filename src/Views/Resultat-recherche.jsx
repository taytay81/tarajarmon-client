import React, { Component } from "react";
import Articles from "../Components/affichage/Articles";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
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
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <div className="resultat-recheche-titre">
            <h1>RÉSULTATS DE RECHERCHE POUR "{this.state.element}" </h1>
          </div>

          <Articles recherche={this.state.element}></Articles>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
