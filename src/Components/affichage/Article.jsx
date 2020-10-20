import React, { Component } from "react";
import "../../Styles/Articles.css";

export default class Article extends Component {
  state = {
    loadingClassNameimg: " unArticle_img_hidden",
    loadingClassNameLogo: "unArticle_loading_logo_visible",
  };
  changeLoadingImg() {
    console.log("loaded");
    this.setState({ loadingClassNameimg: "unArticle_img_visible" });
    this.setState({ loadingClassNameLogo: "unArticle_loading_logo_hidden" });
  }

  render() {
    console.log("test", this.props.articleValue.image[0]);
    return (
      <div className="unArticle">
        <div className={this.state.loadingClassNameimg}>
          <img
            src={this.props.articleValue.image[0]}
            alt=""
            onLoad={() => this.changeLoadingImg()}
          />
        </div>
        <div className={this.state.loadingClassNameLogo}>
          <img src="../icone.jpg" alt="" />
        </div>
        <h2 className="unArticle_titre">{this.props.articleValue.titre}</h2>
        <div className="unArticle_prix">{this.props.articleValue.prix} dt </div>
      </div>
    );
  }
}
