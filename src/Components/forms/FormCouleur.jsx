import React, { Component } from "react";
import api from "../../api/APIHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Form.css";
import "../../Styles/table.css";

export default class FormCouleur extends Component {
  // TO DO afficher un message vert lorsque la couleur a ete ajoutee avec succes ou modifier avec succes
  state = {
    mode: "",
    ajouterCouleur: "",
    modifierCouleur: "",
    idModifierCouleur: "",
    toutesLesCouleurs: [],
    failTextMessage: "",
    passTextMessage: "",
  };

  getColor() {
    api
      .get("/produit/couleur")
      .then((resultat) => {
        this.setState({ toutesLesCouleurs: resultat.data.couleur });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getColor();
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  checkIfValueAlreadyExist(newCouleur) {
    for (let i = 0; i < this.state.toutesLesCouleurs.length; i++) {
      if (
        this.state.toutesLesCouleurs[i]["couleur"].toLowerCase() ===
        newCouleur.toLowerCase()
      ) {
        return true;
      }
    }

    return false;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ passTextMessage: "" });
    this.setState({ failTextMessage: "" });

    if (this.state.mode === "ajouter") {
      const newcolor = {
        couleur: this.state.ajouterCouleur,
      };
      //if the color doesnt exist

      if (!this.checkIfValueAlreadyExist(this.state.ajouterCouleur)) {
        api
          .post("/produit/couleur", newcolor)
          .then((resultat) => {
            this.getColor();
            this.setState({ mode: "" });
            this.setState({ ajouterCouleur: "" });
            this.setState({ modifierCouleur: "" });
            this.setState({ idModifierCouleur: "" });
            this.setState({
              passTextMessage: "L'ajout d une couleur a ete fait avec succes",
            });
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.setState({
          failTextMessage:
            "La couleur existe deja en base elle ne peut etre ajoutee",
        });
      }
    } else if (this.state.mode === "modifier") {
      const modifierCouleur = {
        couleur: this.state.modifierCouleur,
      };
      api
        .patch(
          `/produit/couleur/${this.state.idModifierCouleur}`,
          modifierCouleur
        )
        .then((resultat) => {
          this.getColor();
          this.setState({ mode: "" });
          this.setState({ ajouterCouleur: "" });
          this.setState({ modifierCouleur: "" });
          this.setState({ idModifierCouleur: "" });
          this.setState({
            passTextMessage:
              "La modification d'une couleur a ete fait avec succes",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  handleClick(mode, id) {
    this.setState({ mode: mode });
    this.setState({ idModifierCouleur: id });
  }
  render() {
    return (
      <form
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div className="AdminBO-content">
          <h1 className="title">
            Administration du Back office / Les couleurs
          </h1>
          {this.state.failTextMessage && (
            <div className="error-message">{this.state.failTextMessage}</div>
          )}
          {this.state.passTextMessage && (
            <div className="info-message">{this.state.passTextMessage}</div>
          )}
          <table className="table-AdminBO">
            <thead>
              <tr>
                <th scope="col">Nouvelle couleur </th>
                <th scope="col">Ajouter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>
                  <input id="ajouterCouleur" type="text" />
                  <button
                    id="ajouter-btn"
                    className="ajouter-btn"
                    onClick={() => this.handleClick("ajouter", "")}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <hr />
          <table className="table-AdminBO">
            <thead>
              <tr>
                <th scope="col">Couleur existante</th>
                <th scope="col">Modifier</th>
              </tr>
            </thead>
            <tbody>
              {this.state.toutesLesCouleurs.map((couleur, i) => (
                <tr key={i}>
                  <th scope="row">{couleur.couleur}</th>
                  <td>
                    <input id="modifierCouleur" type="text" />
                    <button
                      id={couleur._id}
                      onClick={() => this.handleClick("modifier", couleur._id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}
