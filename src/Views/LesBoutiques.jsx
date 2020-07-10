import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import "./../Styles/LesBoutiques.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function LesBoutiques() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>3 BOUTIQUES</h1>
      <div className="boutique-list">
        <div className="boutique-element">
          <div className="boutique-element-l1">
            <div className="boutique-elmt-icone">
              <FontAwesomeIcon color="grey" size="lg" icon={faMapMarkerAlt} />
            </div>
            <h3> Tara Jarmon Tunisia Mall </h3>
          </div>

          <div className="boutique-element-adress">
            Tunisia Mall
            <br></br>1 er etage
            <br></br>
            tel :+216 98
          </div>
        </div>
        <div className="boutique-element"> boutique 2</div>
        <div className="boutique-element"> boutique 3</div>
      </div>

      <Footer></Footer>
    </div>
  );
}
