import React, { Component } from "react";
//used to be be able to acccess history
import { withRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "./../Styles/Home.css";
import { Link } from "react-router-dom";

class HomewithoutNews extends Component {
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
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(HomewithoutNews);
