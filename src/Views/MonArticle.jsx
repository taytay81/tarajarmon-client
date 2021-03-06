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


  //check which size are available
  sizeIsDispo(size) {
  
    for (let i = 0; i < this.state.tailleDispo.length; i++) {
      if (this.state.tailleDispo[i] == size) {
        return true
        }
    }

    return false;
  }

  /** cette fonction va recuperer toutes les taille disponible en stock et les mettre dans un tableau
   *  elle va aussi mettre a jour la variable taille dispo dans le state */
  getTaille(article) {
    var tailledisponible = [];

    for (let i = 0; i < article.article_size.length; i++) {
      if (article.article_size[i].disponible === true) {
        api
          .get(`/articles/detail/taille/${article.article_size[i].taille}`)
          .then((taille) => {
            tailledisponible = tailledisponible.concat([taille.data.taille]);
           

            //on est oblige d appeler cette fonction et de faire le setstate ici car ci on le fait plus bas la valeur tailldisponible est nulle
            
            this.setState({
              tailleDispo: tailledisponible,
            });
            this.getTailleExistante(this.state.tailleDispo);

            
          })
          .catch((err) => {
            console.error(err);
          });
          
      }
    }
    
  }

  /** cette fonction va dans un premier temps recuperer le type de taille
   * dans un deuxieme temps elle va creer 2 tableaux qui correspondent au deux lignes visible
   * elle va egelement leur donner une classe css si l article est dispo ou pas pour le styling
   */
  getTailleExistante(tailledisponible) {
    
    var items1 = [...this.state.tailleExistante1];
    var items2 = [...this.state.tailleExistante2];

    var sizeList = [];
  
    var articleType=this.state.type

    /** cherche le type de taille et va creer un tableau sizelist les contenants dispo ou pas   */
   
    if (articleType === "chaussures")
      sizeList = ["36", "37", "38", "39", "40", "41"];
    else if (articleType === "ceinture") sizeList = ["70", "80", "90"];
    else if (
      articleType === "bijoux" ||
      articleType === "sac" ||
      articleType === "acc. textile" ||
      articleType === "lunettes"
    )
      sizeList = ["tu"];
    else {
      if (tailledisponible.length > 0) {
        if (
          tailledisponible[0] == "s" ||
          tailledisponible[0] == "m" ||
          tailledisponible[0] == "l"
        ) {
          sizeList = ["s", "m", "l"];
        } else {
          sizeList = ["34", "36", "38", "40", "42", "44"];
        }
      } else {
        sizeList = ["34", "36", "38", "40", "42", "44"];
      }
    }

    /* recupere les tailles dispo dans le type de taille et attribue la bonne classe css  */

    for (let i = 0; i < sizeList.length; i++) {
      if (i < 3) {
        let item = { ...items1[i] };
        item.size = sizeList[i];
        
        if (this.sizeIsDispo(sizeList[i])) {
          item.css = "article_det_size_link_dispo";
         
        } 
        
        else {
         
          item.css = "article_det_size_link";}
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
    // met a jour les deux elements les deux lignes contenant les tailles et leur css
    this.setState({ tailleExistante1: items1 });
    this.setState({ tailleExistante2: items2 });
  }

  render() {
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
