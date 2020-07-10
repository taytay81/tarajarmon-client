import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "../../Styles/table.css";
export default class GestionnaireBO extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="AdminBO-content">
          <h1 className="title-AdminBO">Administration du Back office</h1>
          <table className="table-AdminBO">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Ajouter</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">couleur</th>
                <td>
                  <Link className="link" to="/Gestioncouleur">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link className="link" to="/Gestioncouleur">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/Gestioncouleur">
                    <FontAwesomeIcon icon={faTimes} />
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">composition</th>
                <td>
                  <Link className="link" to="/composition">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/composition">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/composition">
                    <FontAwesomeIcon icon={faTimes} />
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">type</th>
                <td>
                  <Link className="link" to="/type">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/type">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/type">
                    <FontAwesomeIcon icon={faTimes} />
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">article</th>
                <td>
                  <Link className="link" to="/GestionArticle">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </td>
                <td>
                  <Link className="link" to="/GestionArticle">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link className="link" to="/GestionArticle">
                    <FontAwesomeIcon icon={faTimes} />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}
