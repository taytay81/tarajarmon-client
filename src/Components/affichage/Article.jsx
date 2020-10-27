import React, { Component } from "react";
import "../../Styles/Articles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class Article extends Component {
  state = {
    loadingClassNameimg: " unArticle_img_hidden",
    loadingClassNameLogo: "unArticle_loading_logo_visible",
  };
  changeLoadingImg() {
    
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
            alt="article_img"
            onLoad={() => this.changeLoadingImg()}
          />
        </div>
        <div className={this.state.loadingClassNameLogo}>
          <FontAwesomeIcon color="black" size="4x" spin icon={faSpinner} />
        </div>
        <h2 className="unArticle_titre">{this.props.articleValue.titre}</h2>
        <div className="unArticle_prix">{this.props.articleValue.prix} dt </div>
      </div>
    );
  }
}
