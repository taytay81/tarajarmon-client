import React, { Component } from "react";

export default class Article_detail extends Component {
  state = {
    compositions: [],
    couleurs: [],
    tailles: [],
  };
  componentDidMount() {
    console.log("test", this.props.infos);
    //get composition
    //get size
    //get couleurs
  }
  render() {
    return (
      <div className="article_det_container">
        <div className="article_detail">
          <div className="article_det_infos">
            <div className="article_det_titre">{this.props.infos.titre}</div>
            <div className="article_det_description">
              {this.props.description}
            </div>
            <div className="article_det_compo">
              {this.props.infos.composition}
            </div>
            <div className="article_det_ref">{this.props.infos.reference}</div>
          </div>
          <div className="article_det_photos">
            <div className="article_det_photos_cont">
              <img src={this.props.infos.image} alt="image_article" />
            </div>
          </div>
          <div className="article_det_taille">3</div>
        </div>
      </div>
    );
  }
}
