import React, { Component } from "react";
import api from "../../api/APIHandler";
import Article from "./Article";
import ArticleNav from "./Article_nav";
import "../../Styles/Articles.css";
import { Link } from "react-router-dom";

export default class articles extends Component {
  //get type in props
  state = {
    allArticlesAvailable: [],
  };

  componentDidMount() {
    if (this.props.type) {
      api
        .get("/articles/" + this.props.type)
        .then((resultat) => {
          this.setState({ allArticlesAvailable: resultat.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (this.props.recherche) {
      api
        .get("/articles/recherche/" + this.props.recherche)
        .then((resultat) => {
          this.setState({ allArticlesAvailable: resultat.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  // le update ne marche que pour la recherche car l affichage par type n est dispo qu a l ouverture de la page .
  componentDidUpdate(prevProps) {
    if (this.props.recherche !== prevProps.recherche) {
      console.log("les props article ont change ");
      api
        .get("/articles/recherche/" + this.props.recherche)
        .then((resultat) => {
          this.setState({ allArticlesAvailable: resultat.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  render() {
    return (
      <div>
        <div>
          {Boolean(this.state.allArticlesAvailable.length) && (
            <ArticleNav
              nombre={this.state.allArticlesAvailable.length}
            ></ArticleNav>
          )}
        </div>
        <div className="articles_container">
          <div className="tousLesArticles">
            {Boolean(this.state.allArticlesAvailable.length) &&
              this.state.allArticlesAvailable.map((article, i) => (
                <Link
                  key={i}
                  className="link"
                  to={`/articles/detail/${article._id}`}
                >
                  <Article key={i} articleValue={article}></Article>
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
