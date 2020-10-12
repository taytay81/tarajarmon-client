import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../api/APIHandler";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import ArticleDetail from "../Components/affichage/ArticleDetail";
import BreadCrum from "./../Components/Breadcrum";
import "../Styles/Articles.css";

export default class MonArticle extends Component {
  state = {
    article: "",
    composition: "",
    couleur: "",
    code: "",
    tailleExistante1: [{}],
    tailleExistante2: [],
    tailleDispo: [],
    type: "",
    images: [],
    myLinks: [],
  };

  componentDidMount() {
    api
      .get(`/articles/detail/${this.props.match.params.id}`)
      .then((article_res) => {
        this.setState({ article: article_res.data[0] });
        this.setState({ images: article_res.data[0].image });

        this.getType(article_res.data[0]);
        this.getComposition(article_res.data[0]);
        this.getCouleur(article_res.data[0]);
        this.getTaille(article_res.data[0]);
        this.setBreadCrumb(article_res.data[0].titre);
      })
      .catch((err) => {
        console.error(err);
      });

    //get composition
  }

  setBreadCrumb(titre) {
    var links = this.props.history.location.state.breadcrum;
    if (links.length > 1) {
      links[1].separator = ">";
      links.push({
        name: titre,
        link: this.props.history.location.pathname,
        separator: "",
      });
      this.setState({ myLinks: links });
    }
  }

  getComposition(article) {
    api
      .get(`/articles/detail/composition/${article.composition}`)
      .then((compo) => {
        this.setState({ composition: compo.data.composition });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getType(article) {
    api
      .get(`/articles/detail/type/${article.type}`)
      .then((type) => {
        this.setState({ type: type.data.type });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getCouleur(article) {
    api
      .get(`/articles/detail/couleur/${article.couleur}`)
      .then((elt) => {
        this.setState({ couleur: elt.data.couleur });
        this.setState({ code: elt.data.code });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  sizeIsDispo(size) {
    var found = false;
    for (let i = 0; i < this.state.tailleDispo.length; i++) {
      if (this.state.tailleDispo[i] === size) found = true;
    }

    return found;
  }
  getTaille(article) {
    for (let i = 0; i < article.article_size.length; i++) {
      if (article.article_size[i].disponible === true) {
        api
          .get(`/articles/detail/taille/${article.article_size[i].taille}`)
          .then((taille) => {
            this.setState({
              tailleDispo: this.state.tailleDispo.concat([taille.data.taille]),
            });
            //on recupere les tailles existantes apres avoir recuperer les tailles dispo
            this.getTailleExistante();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

  getTailleExistante() {
    // si chaussures
    let items1 = [...this.state.tailleExistante1];
    let items2 = [...this.state.tailleExistante2];
    let sizeList = "";
    if (this.state.article.type === "chaussures")
      sizeList = ["36", "37", "38", "39", "40", "41"];
    else if (this.state.article.type === "ceinture")
      sizeList = ["70", "80", "90"];
    else if (
      this.state.article.type.match("bijoux", "sac", "acc.textile", "lunettes")
    )
      sizeList = ["TU"];
    else {
      if (this.state.tailleDispo.length > 0) {
        for (let i = 0; i < this.state.tailleDispo.length; i++) {
          if (this.state.tailleDispo[i].match("s", "m", "l"))
            sizeList = ["s", "m", "l"];
          else sizeList = ["34", "36", "38", "40", "42", "44"];
        }
      } else sizeList = ["34", "36", "38", "40", "42", "44"];
    }

    for (let i = 0; i < sizeList.length; i++) {
      if (i < 3) {
        let item = { ...items1[i] };
        item.size = sizeList[i];
        if (this.sizeIsDispo(sizeList[i]))
          item.css = "article_det_size_link_dispo";
        else item.css = "article_det_size_link";
        items1[i] = item;
      } else {
        let item = { ...items2[i - 3] };
        item.size = sizeList[i];
        if (this.sizeIsDispo(sizeList[i]))
          item.css = "article_det_size_link_dispo";
        else item.css = "article_det_size_link";
        items2[i - 3] = item;
      }
    }

    this.setState({ tailleExistante1: items1 });
    this.setState({ tailleExistante2: items2 });
  }

  render() {
    console.log("test", this.props.history);
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <BreadCrum links={this.state.myLinks}></BreadCrum>
          <ArticleDetail
            infos={this.state.article}
            composition={this.state.composition}
            couleur={this.state.couleur}
            code_couleur={this.state.code}
            taille_dispo={this.state.tailleDispo}
            taille_existante1={this.state.tailleExistante1}
            taille_existante2={this.state.tailleExistante2}
            images={this.state.images}
          ></ArticleDetail>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
