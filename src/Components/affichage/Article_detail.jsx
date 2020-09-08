import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class Article_detail extends Component {
  state = {
    compositions: [],
    couleurs: [],
    tailles: [],
  };
  componentDidMount() {
    console.log("test dans l enfant ", this.props.infos);
    console.log("test dans l enfant compo ", this.props.composition);
  }
  render() {
    const styles = {
      background: this.props.code_couleur,
    };
    return (
      <div className="article_det_container">
        <div className="article_detail">
          <div className="article_det_infos">
            <div className="article_det_titre">
              <h2>{this.props.infos.titre}</h2>
            </div>
            <div className="article_det_description">
              {this.props.infos.description}
            </div>
            <div className="article_det_compo">{this.props.composition}</div>
            <div className="article_det_ref">
              <span className="article_det_ref_span">Réf:</span>
              <span>{this.props.infos.reference}</span>
              <hr></hr>
            </div>
          </div>
          <div className="article_det_photos">
            <div className="article_det_photos_cont">
              <img src={this.props.infos.image} alt="image_article" />
            </div>
          </div>

          <div className="article_det_taille">
            <div className="article_det_couleurs" id={this.props.couleur}>
              <hr></hr>
              <div
                className="article_det_couleurs_round"
                style={styles}
                data-tip
                data-for="couleurTip"
              ></div>
              <ReactTooltip id="couleurTip" place="top" effect="solid">
                {this.props.couleur}
              </ReactTooltip>
            </div>

            <div className="article_det_size">
              <ul>
                <li>
                  <a className="article_det_size_link">34</a>
                </li>
                <li>
                  <a className="article_det_size_link">36</a>
                </li>
                <li>
                  <a className="article_det_size_link">38</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="article_det_size_link">40</a>
                </li>
                <li>
                  <a className="article_det_size_link">42</a>
                </li>
                <li>
                  <a className="article_det_size_link">44</a>
                </li>
              </ul>
            </div>
            <div className="article_det_prix">
              <h2>{this.props.infos.prix},000 TND</h2>
            </div>
            <div className="article_det_ajout_panier">
              <button className="article_det_ajout_panier_btn">
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
