import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../Styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.search);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ search: "" });
  };
  handleKeypress = (e) => {
    if (e.key === "Enter") {
      this.props.history.push("/Resultat/" + this.state.search);
    }
  };
  render() {
    return (
      <form
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onKeyPress={this.handleKeypress}
      >
        <header className="header-navbar">
          <div className="bandeau-pre-header">
            <p className="bandeau-pre-header-txt">
              Voici nos modeles de la nouvelle collection , Bientot L'achat en
              Ligne. &nbsp;
              <br></br>
              Merci&nbsp; pour votre patience , love &hearts;
            </p>
          </div>
          <div className="header-container">
            <div className="header-title">
              <h1>
                <a href="/home">
                  <p>
                    TARA JARMON
                    <span className="header-subtitle"> TUNISIE </span>
                  </p>
                </a>
              </h1>
            </div>

            <div className="header-icons">
              <div className="header-icons-search-input">
                <input
                  name="search"
                  id="search"
                  type="text"
                  className="input"
                  defaultValue={this.state.search}
                />
              </div>

              <ul className="header-icons-list">
              {this.state.search && 
              <li className="header-icons-listelmt">
                   <Link
                    className="header-icons-search-link"
                    to={`/Resultat/${this.state.search}`}
                  >
                    <FontAwesomeIcon color="grey" size="lg" icon={faSearch} />
                  </Link>
                  </li>}
                  {!this.state.search && 
              <li className="header-icons-listelmt">
                   <div className="header-icons-search-link"> <FontAwesomeIcon color="grey" size="lg" icon={faSearch} /></div>
                 
                   
                  
                  </li>}  
                  
                <li className="header-icons-listelmt">
                  <a className="header-icons-address-link" href="/LesBoutiques">
                    <FontAwesomeIcon
                      color="grey"
                      size="lg"
                      icon={faMapMarkerAlt}
                    />
                  </a>
                </li>
                <li className="header-icons-listelmt">
                  <a className="header-icons-connect-link">
                    <FontAwesomeIcon color="grey" size="lg" icon={faUser} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-links-section">
            <ul>
              <li>
                <NavLink
                  to="/Nouveautes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  NEW IN
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/LesRobes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  ROBES
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Mailles"
                  className="header-link"
                  activeClassName="is-active"
                >
                  MAILLES
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Tops"
                  className="header-link"
                  activeClassName="is-active"
                >
                  TOPS
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Bas"
                  className="header-link"
                  activeClassName="is-active"
                >
                  BAS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Accessoires"
                  className="header-link"
                  activeClassName="is-active"
                >
                  ACCESSOIRES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ManteauxVestes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  MANTEAUX & VESTES
                </NavLink>
              </li>

              {/*<li>
                <NavLink
                  to="/TaraStories"
                  className="header-link"
                  activeClassName="is-active"
                >
                  TARA STORIES
                </NavLink>
              </li>*/}
              <li>
                <NavLink
                  to="/LookBook"
                  className="header-link"
                  activeClassName="is-active"
                >
                  LOOKBOOK
                </NavLink>
              </li>
            </ul>

            {/*<NavLink
              to="/Ceremonies"
              className="header-link"
              activeClassName="is-active"
            >
              CEREMONIES
            </NavLink>*/}

            {/*<NavLink
              to="/administration"
              className="header-link-red"
              activeClassName="is-active"
            >
              ADMINISTRATION
            </NavLink>*/}
          </div>

          <div className="header-links-section-mobile">
            <ul>
              <li className="header-links-icons-mobile">
              
              <div className="header-icons-search-input">
                <input
                  name="search"
                  id="search"
                  type="text"
                  className="input"
                  defaultValue={this.state.search}
                />
              </div>

              <ul className="header-icons-list">
                <li className="header-icons-listelmt">
                  <Link
                    className="header-icons-search-link"
                    to={`/Resultat/${this.state.search}`}
                  >
                    <FontAwesomeIcon color="grey" size="xs" icon={faSearch} />
                  </Link>
                </li>
                <li className="header-icons-listelmt">
                  <a className="header-icons-address-link" href="/LesBoutiques">
                    <FontAwesomeIcon
                      color="grey"
                      size="xs"
                      icon={faMapMarkerAlt}
                    />
                  </a>
                </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/Nouveautes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  NEW IN
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/LesRobes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  ROBES
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Mailles"
                  className="header-link"
                  activeClassName="is-active"
                >
                  MAILLES
                </NavLink>
              </li>
              
              <li>
                {" "}
                <NavLink
                  to="/Tops"
                  className="header-link"
                  activeClassName="is-active"
                >
                  TOPS
                </NavLink>
              </li>
              </ul>
              
              <ul>
              
              <li>
                {" "}
                <NavLink
                  to="/Bas"
                  className="header-link"
                  activeClassName="is-active"
                >
                  BAS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Accessoires"
                  className="header-link"
                  activeClassName="is-active"
                >
                  ACCESSOIRES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ManteauxVestes"
                  className="header-link"
                  activeClassName="is-active"
                >
                  MANTEAUX & VESTES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/LookBook"
                  className="header-link"
                  activeClassName="is-active"
                >
                  LOOKBOOK
                </NavLink>
              </li>
            </ul>

           
          </div>
        </header>
      </form>
    );
  }
}

export default withRouter(NavBar);
