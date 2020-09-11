import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class Article_detail extends Component {
  state = {
    compositions: [],
    couleurs: [],
    tailles: [],
  };
  componentDidMount() {
    // on veut ici split en deux tableaux si plus de 3
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
                {!!this.props.taille_existante1.length &&
                  this.props.taille_existante1.map((taille, i) => (
                    <li key={i}>
                      <a className={taille.css}>{taille.size}</a>
                    </li>
                  ))}
              </ul>
              <ul>
                {!!this.props.taille_existante2.length &&
                  this.props.taille_existante2.map((taille, i) => (
                    <li key={i}>
                      <a className={taille.css}>{taille.size}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="article_det_prix">
              <h2>{this.props.infos.prix},000 TND</h2>
            </div>
            <div className="article_det_ajout_panier">
              <button className="article_det_ajout_panier_btn">
                BIENTOT AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
