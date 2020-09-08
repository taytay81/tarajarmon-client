import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import FormArticle from "../../Components/forms/FormArticle";
import Footer from "../../Components/Footer";
import "../../Styles/table.css";
export default class AddAnArticle extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <FormArticle></FormArticle>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
