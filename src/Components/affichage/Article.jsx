import React, { Component } from "react";
import "../../Styles/Articles.css";
export default class Article extends Component {
  render() {
    return (
      <div className="unArticle">
        <div className="unArticle_img">
          <img src={this.props.articleValue.image} alt="" />
        </div>
        <h2 className="unArticle_titre">{this.props.articleValue.titre}</h2>
        <div className="unArticle_prix">{this.props.articleValue.prix} dt </div>
      </div>
    );
  }
}
