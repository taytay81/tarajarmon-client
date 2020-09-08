import React, { Component } from "react";

import api from "../api/APIHandler";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Article_detail from "../Components/affichage/Article_detail";
import "../Styles/Articles.css";

export default class MonArticle extends Component {
  state = {
    article: "",
    composition: "",
    couleur: "",
    code: "",
    tailleExistante: [],
    tailleDispo: [],
  };

  componentDidMount() {
    api
      .get(`/articles/detail/${this.props.match.params.id}`)
      .then((article_res) => {
        console.log("res", article_res.data[0]);
        this.setState({ article: article_res.data[0] });
        this.getComposition();
        this.getCouleur();
      })
      .catch((err) => {
        console.error(err);
      });

    //get composition
  }

  getComposition() {
    api
      .get(`/articles/detail/composition/${this.state.article.composition}`)
      .then((compo) => {
        console.log("res", compo.data);
        this.setState({ composition: compo.data.composition });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getCouleur() {
    api
      .get(`/articles/detail/couleur/${this.state.article.couleur}`)
      .then((elt) => {
        this.setState({ couleur: elt.data.couleur });
        this.setState({ code: elt.data.code });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getTaille() {
    api
      .get(`/articles/detail/taille/${this.state.article.taille}`)
      .then((compo) => {
        console.log("res", compo.data);
        this.setState({ taille: compo.data.taille });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log("dans le parent l article ", this.state.couleur);
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <Article_detail
            infos={this.state.article}
            composition={this.state.composition}
            couleur={this.state.couleur}
            code_couleur={this.state.code}
          ></Article_detail>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
