import React, { Component } from "react";
//used to be be able to acccess history
import { withRouter } from "react-router-dom";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Newsletter from "./../Components/forms/FormNewsletter";
import Mostwanted from "./../Components/affichage/ArticleMostWanted"
import "./../Styles/Home.css";
import { Link } from "react-router-dom";
import api from "../api/APIHandler";

class Home extends Component {
  state = {
    email: "",
    prenom: "",
    message: false,
    messagetxt: "",
  };

  handleSendEmail = (email, prenom) => {
    const newContat = { prenom: prenom, email: email };
    var addedaccount = false;
    api
      .post("/newsLetter/newUser", newContat)
      .then((resultat) => {
        addedaccount = true;
        this.setState({ message: true });
        this.setState({
          messagetxt: " Merci de vous etres inscrit, a bientot",
        });
      })
      .catch((err) => {
        console.error(err);
      });
    console.log();
    if (addedaccount === false) {
      this.setState({ message: true });
      this.setState({
        messagetxt:
          "Vous etes deja inscrit a la Newsletter, Merci et a bientot",
      });
    }
  };

  handleOnChangeEmail = (email) => {
    this.setState({
      email: email,
    });
  };
  handleOnChangePrenom = (prenom) => {
    this.setState({
      prenom: prenom,
    });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="page-content">
          <div className="home_img_container">
            <Link className="link" to={`/home`}>
              <img
                src="../images/frontpage/HP_desktop_visage_FR.jpg"
                alt="frontpage image2"
              ></img>
            </Link>
          </div>
          <div className="Newsletter">
            <Newsletter
              handleSendEmail={this.handleSendEmail}
              handleOnChangeEmail={this.handleOnChangeEmail}
              handleOnChangePrenom={this.handleOnChangePrenom}
              email={this.state.email}
              prenom={this.state.prenom}
              showmessage={this.state.message}
              message={this.state.messagetxt}
            ></Newsletter>
          </div>
        </div>
        
        <Mostwanted></Mostwanted>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Home);
