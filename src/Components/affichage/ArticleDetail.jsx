import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class ArticleDetail extends Component {
  state = {
    compositions: [],
    couleurs: [],
    tailles: [],
    images: [],
    linkClassName: "article-det-linkhidden",
    loadingClassNameimg: " article_det_photos_hidden",
    loadingClassNameLogo: "article_det_loading_logo_visible",
  };
  componentDidMount() {
    // on veut ici split en deux tableaux si plus de 3
    this.setState({ images: this.props.images });
  }

  handleClick() {
    this.setState({ linkClassName: "article-det-linkvisible" });
  }

  changeLoadingImg() {
    console.log("loaded");
    this.setState({ loadingClassNameimg: "article_det_photos_visible" });
    this.setState({ loadingClassNameLogo: "article_det_loading_logo_hidden" });
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
          <div className={this.state.loadingClassNameimg}>
            {this.props.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="image_article"
                onLoad={() => this.changeLoadingImg()}
              />
            ))}
          </div>
          <div className={this.state.loadingClassNameLogo}>
            <img src="../../icone.jpg" alt="iconeTJ" />
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
              <button
                className="article_det_ajout_panier_btn"
                onClick={() => this.handleClick()}
              >
                ACHETER
              </button>
              <div className={this.state.linkClassName}>
                Bonne Nouvelle , L'article est disponible . <br></br>
                <a href="/LesBoutiques">Contactez votre magasin </a>
                le plus proche pour le reserver .
              </div>
            </div>
          </div>
        </div>
        <div className="article_det_mobile">
          <div className="article_det_titre_mobile">
            <h3>{this.props.infos.titre}</h3>
          </div>
          <div className="article_det_ref_mobile">
            <span className="article_det_ref_span_mobile">Réf:</span>
            <span>{this.props.infos.reference}</span>
            <hr></hr>
          </div>
          <div className="article_det_prix_mobile">
            <h2>{this.props.infos.prix},000 TND</h2>
          </div>
          <div className="article_det_photos_mobile">
            {this.props.images.map((image, i) => (
              <img key={i} src={image} alt="image_article" />
            ))}
          </div>
          <div>
            <div
              className="article_det_couleurs_round_mobile"
              style={styles}
              data-tip
              data-for="couleurTip"
            ></div>
            <ReactTooltip id="couleurTip" place="top" effect="solid">
              {this.props.couleur}
            </ReactTooltip>
          </div>

          <div className="article_det_size_mobile">
            <ul>
              {!!this.props.taille_existante1.length &&
                this.props.taille_existante1.map((taille, i) => (
                  <a key={i} className={taille.css}>
                    {taille.size}
                  </a>
                ))}
              {!!this.props.taille_existante2.length &&
                this.props.taille_existante2.map((taille, i) => (
                  <a key={i} className={taille.css}>
                    {taille.size}
                  </a>
                ))}
            </ul>
          </div>
          <div className="article_det_ajout_panier_mobile">
            <button className="article_det_ajout_panier_mobile_btn">
              BIENTOT AJOUTER AU PANIER
            </button>
          </div>
          <div>
            <hr></hr>
            <h4>Description :</h4>
          </div>

          <div className="article_det_description">
            {this.props.infos.description}
          </div>
          <h4>Composition :</h4>
          <div className="article_det_compo_mobile">
            {this.props.composition}
          </div>
        </div>
      </div>
    );
  }
}
