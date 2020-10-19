import React, { Component } from "react";
//used to be be able to acccess history
import { withRouter } from "react-router-dom";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import Newsletter from "./../Components/forms/FormNewsletter";
import "./../Styles/Home.css";
import { Link } from "react-router-dom";
import api from "../api/APIHandler";

class Home extends Component {
  state = {
    email: "",
    prenom: "",
    message: false,
  };

  handleSendEmail = (email, prenom) => {
    const newContat = { prenom: prenom, email: email };
    
    api
      .post("/newsLetter/newUser", newContat)
      .then((resultat) => {
       
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState({ message: true });
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
            ></Newsletter>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Home);
