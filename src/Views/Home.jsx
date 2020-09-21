import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import "./../Styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
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
