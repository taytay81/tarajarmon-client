import React from "react";
import NavBar from "./../Components/NavBar";
import "./../Styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <div className="home_img_container">
        <Link className="link" to={`/home`}>
          <img
            src="../images/frontpage/HP_urban_summer_desktop.jpg"
            alt="frontpage image"
          ></img>
        </Link>
      </div>
    </div>
  );
}
