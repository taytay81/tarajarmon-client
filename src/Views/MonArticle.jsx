import React, { Component } from "react";

import api from "../api/APIHandler";
import NavBar from "./../Components/NavBar";
import Article_detail from "../Components/affichage/Article_detail";
import "../Styles/Articles.css";

export default class MonArticle extends Component {
  state = {
    article: "",
  };

  componentDidMount() {
    api
      .get(`/articles/detail/${this.props.match.params.id}`)
      .then((article_res) => {
        console.log("res", article_res.data[0]);
        this.setState({ article: article_res.data[0] });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Article_detail infos={this.state.article}></Article_detail>
      </div>
    );
  }
}
