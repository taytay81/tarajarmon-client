import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import FormArticle from "../../Components/forms/FormArticle";
import Footer from "../../Components/Footer";

export default class AddAnArticle extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <FormArticle></FormArticle>
        <Footer></Footer>
      </div>
    );
  }
}
