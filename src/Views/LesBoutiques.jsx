import React from "react";
import NavBar from "./../Components/NavBar";
import Footer from "./../Components/Footer";
import BreadCrum from "./../Components/Breadcrum";
import "./../Styles/LesBoutiques.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function LesBoutiques() {
  const myLinks = [
    { name: "Accueil", link: "/home", separator: ">" },
    { name: " Les Boutiques", link: "/LesBoutiques", separator: "" },
  ];
  return (
    <div>
      <NavBar></NavBar>

      <div className="page-content">
      <BreadCrum links={myLinks}></BreadCrum>
        <div className="boutique-list">
          <div className="boutique-title">
            <h1>3 BOUTIQUES</h1>
          </div>

          <div className="boutique-element">
            <div className="boutique-element-l1">
              <div className="boutique-elmt-icone">
                <FontAwesomeIcon color="grey" size="lg" icon={faMapMarkerAlt} />
              </div>
              <h3> Tara Jarmon Lac 1</h3>
            </div>
            <div className="boutique-element-adress">
              Rue du lac Tchad, Berge Du Lac
              <br></br> Face au Lac Palace.
              <br></br> Tunis, Tunisie
              <br></br>
              tel :+216 719 612 20
            </div>
          </div>

          <div className="boutique-element">
            <div className="boutique-element-l1">
              <div className="boutique-elmt-icone">
                <FontAwesomeIcon color="grey" size="lg" icon={faMapMarkerAlt} />
              </div>
              <h3> Tara Jarmon Tunisia Mall </h3>
            </div>
            <div className="boutique-element-adress">
              Avenue de la Monnaie , Tunisia Mall
              <br></br>1 er etage
              <br></br>
              tel :+216 719 694 00
            </div>
          </div>
          <div className="boutique-element">
            <div className="boutique-element-l1">
              <div className="boutique-elmt-icone">
                <FontAwesomeIcon color="grey" size="lg" icon={faMapMarkerAlt} />
              </div>
              <h3> Tara Jarmon Gammarth </h3>
            </div>
            <div className="boutique-element-adress">
              Gammarth center a coté de l’hotel <br></br>
              Residence Zone Touristique <br></br>
              "Les Côtes de Carthage"
              <br></br>2070 Gammarth
              <br></br>
              tel :+216 717 394 29
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
