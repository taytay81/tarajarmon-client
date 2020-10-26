import React, { Component } from "react";
//used to be be able to acccess history
import { withRouter } from "react-router-dom";
import api from "../../api/APIHandler";
import "../../Styles/Form.css";
import "../../Styles/table.css";
import CustomInputFile from "../icon/IconImageAdmin";

class FormArticle extends Component {
  state = {
    reference: "",
    image: "",
    imageTmp: "",
    image2: "",
    imageTmp2: "",
    images: [],
    titre: "",
    description: "",
    composition: "",
    couleur: "",
    prix: "",
    tousLesTypes: [],
    toutesLesCouleurs: [],
    toutesLesCompositions: [],
    toutesLesTailles: [],
    type: "",
    failTextMessage: "",
    passTextMessage: "",
    typeId: "",
    tailleAjouter: [],
  };

  getType() {
    api
      .get("/produit/type")
      .then((resultat) => {
       
        this.setState({ tousLesTypes: resultat.data.types });
      })
      .catch((err) => {
        console.log("ca a plante");
        console.error(err);
      });
  }

  getColor() {
    api
      .get("/produit/couleur")
      .then((resultat) => {
        this.setState({ toutesLesCouleurs: resultat.data.couleur });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getComposition() {
    api
      .get("/produit/composition")
      .then((resultat) => {
        this.setState({ toutesLesCompositions: resultat.data.composition });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //retrieve from the server all the sizes based on the type selected
  getTaille(typeId) {
    api
      .get(`/produit/taille/${typeId}`)
      .then((resultat) => {
        this.setState({ toutesLesTailles: resultat.data.taille });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    console.log("on est dans le did mount on essaie de recuperer les infos ");
    this.getType();
    this.getColor();
    this.getComposition();
  }

  saveSize(sizeId, sizeQty) {
    //check if the size already exist with an amount
    //if yes  update the array with the new amount
    // if no create a new entry taille Id et quantite
    var arrayWithSize = this.state.tailleAjouter;
    console.log("arraywithsize", arrayWithSize);
    if (arrayWithSize.length > 0) {
      var index = arrayWithSize.findIndex((x) => x.sizeId === sizeId);
      if (index !== -1) {
        //replace with the new qty and exit the function
        arrayWithSize.splice(index, 1);
      }
    }
    
    if (sizeQty === "") sizeQty = 0;
    arrayWithSize.push({ sizeId, sizeQty });
    this.setState({ tailleAjouter: arrayWithSize });
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    //si l on change le type ex robe on veut afficher les tailles a ajouter
    if (e.target.id === "type") this.getTaille(e.target.value);
    if (e.target.name === "taille") this.saveSize(e.target.id, e.target.value);
  };

  /*check form */
  Checkform() {
    if (this.state.reference.length < 3) {
      this.setState({ failTextMessage: "Merci d'entrer une reference valide" });
      return false;
    }
    if (this.state.titre.length < 3) {
      this.setState({ failTextMessage: "Merci d'entrer un titre valide" });
      return false;
    }
    if (this.state.description.length < 10) {
      this.setState({
        failTextMessage: "Merci  d'entrer une description valide",
      });
      return false;
    }
    if (this.state.composition.length < 3) {
      this.setState({
        failTextMessage: "Merci  de choisir une composition valide",
      });
      return false;
    }
    if (this.state.couleur.length < 2) {
      this.setState({
        failTextMessage: "Merci  de choisir une couleur valide",
      });
      return false;
    }
    if (this.state.type.length < 2) {
      this.setState({ failTextMessage: "Merci  de choisir un type valide" });
      return false;
    }
    if (this.state.prix.length === 0) {
      this.setState({ failTextMessage: "Merci  d' entrer un prix correct" });
      return false;
    }
    if (this.state.image.length === 0) {
      this.setState({
        failTextMessage: "Merci  d' attacher une photo principale",
      });
      return false;
    }
    if (this.state.image2.length === 0) {
      this.setState({
        failTextMessage: "Merci  d' attacher une photo secondaire",
      });
      return false;
    }

    if (this.state.tailleAjouter.length === 0) {
      this.setState({
        failTextMessage: "Merci  d' ajouter une quantite pour ce produit",
      });
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ passTextMessage: "" });
    this.setState({ failTextMessage: "" });

    if (this.Checkform()) {
      const fd = new FormData();
      console.log("pour voir le tableau d images", this.state.images);
      fd.append("reference", this.state.reference);
      fd.append("image", this.state.images[0]);
      fd.append("image", this.state.images[1]);
      fd.append("titre", this.state.titre);
      fd.append("description", this.state.description);
      fd.append("composition", this.state.composition);
      fd.append("couleur", this.state.couleur);
      fd.append("prix", this.state.prix);
      fd.append("type", this.state.type);
     
      //ajoute le produit dans la base

      api
        .post("/produit", fd)
        .then((apiRes) => {
          //si l ajout du produit s est bien passe alors on ajoute les articles
          var temparticles = this.state.tailleAjouter;
          var nombreArticleAjoute = 0;
          for (let i = 0; i < temparticles.length; i++) {
            for (let y = 0; y < temparticles[i].sizeQty; y++) {
              var newArticle = {
                produit: apiRes.data._id,
                taille: temparticles[i].sizeId,
              };

              api
                .post("produit/article", newArticle)
                .then((apiRes2) => {
                  nombreArticleAjoute = nombreArticleAjoute + 1;
                  this.setState({
                    passTextMessage: `L'ajout de ${nombreArticleAjoute} article(s) a ete fait avec succes`,
                  });
                })
                .catch((apiErr) => console.log(apiErr));
            }
          }

          //remet a zero le tableau de tailles
          this.setState({ image: "" });
          this.setState({ imageTmp: "" });
          this.setState({ image2: "" });
          this.setState({ imageTmp2: "" });
          this.setState({ reference: "" });
          this.setState({ titre: "" });
          this.setState({ description: "" });
          this.setState({ composition: "" });
          this.setState({ couleur: "" });
          this.setState({ prix: "" });
          this.setState({ type: "" });
          this.setState({ tailleAjouter: "" });
        })
        .catch((apiErr) => console.log(apiErr));
    }
  };

  handleImage = (file, type) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // when the fileReader ends reading image  ...
      const base64String = reader.result;
      // add the actual file to the state + the tmp logo as a preview before upload

      let photos = [...this.state.images];
      if (type === "image1") {
        this.setState({ image: file, imageTmp: base64String });
        photos[0] = file;
      } else {
        photos[1] = file;
        this.setState({ image2: file, imageTmp2: base64String });
      }
      this.setState({ images: photos });
    };
    reader.readAsDataURL(file); // read the file from the local disk
  };
  render() {
    return (
      <>
        <h1 className="form-title">Ajouter un article dans l'Eshop </h1>

        <div className="form-container">
          {this.state.failTextMessage && (
            <div className="error-message">{this.state.failTextMessage}</div>
          )}
          {this.state.passTextMessage && (
            <div className="info-message">{this.state.passTextMessage}</div>
          )}
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <div className="form">
              <div className="form-part">
                <input
                  name="reference"
                  placeholder="Reference"
                  id="reference"
                  type="text"
                  className="input"
                  value={this.state.reference}
                />
                <input
                  name="titre"
                  placeholder="Titre"
                  id="titre"
                  type="text"
                  className="input"
                  value={this.state.titre}
                />
                <select name="articleType" id="type" className="select">
                  <option value="-1">--Type de l'article --</option>
                  {Boolean(this.state.tousLesTypes.length) &&
                    this.state.tousLesTypes.map((type, i) => (
                      <option
                        checked={type._id === this.state.tousLesTypes}
                        value={type._id}
                        key={i}
                      >
                        {type.type}
                      </option>
                    ))}
                </select>

                <select name="articleCouleur" id="couleur" className="select">
                  <option value="-1">--Couleur de l'article --</option>
                  {Boolean(this.state.toutesLesCouleurs.length) &&
                    this.state.toutesLesCouleurs.map((couleur, i) => (
                      <option
                        checked={couleur._id === this.state.toutesLesCouleurs}
                        value={couleur._id}
                        key={i}
                      >
                        {couleur.couleur}
                      </option>
                    ))}
                </select>

                <select
                  name="articleComposition"
                  id="composition"
                  className="select"
                >
                  <option value="-1" className="option">
                    --Composition de l'article --
                  </option>
                  {Boolean(this.state.toutesLesCompositions.length) &&
                    this.state.toutesLesCompositions.map((composition, i) => (
                      <option
                        className="option"
                        checked={
                          composition._id === this.state.toutesLesCompositions
                        }
                        value={composition._id}
                        key={i}
                      >
                        {composition.composition}
                      </option>
                    ))}
                </select>

                <textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                  cols="30"
                  rows="10"
                  className="textarea"
                  value={this.state.description}
                ></textarea>

                <input
                  name="prix"
                  id="prix"
                  placeholder="prix de vente"
                  type="number"
                  className="input"
                  value={this.state.prix}
                />
              </div>
              <div className="form-part">
                <label htmlFor="">Photo principale:</label>
                <CustomInputFile
                  image={this.state.imageTmp || this.state.image}
                  clbk={(e) => this.handleImage(e.target.files[0], "image1")}
                />

                <label htmlFor="">Photo secondaire:</label>

                <CustomInputFile
                  image={this.state.imageTmp2 || this.state.image2}
                  clbk={(e) => this.handleImage(e.target.files[0], "image2")}
                />
              </div>
              <div className="form-part">
                {this.state.toutesLesTailles.length > 0 && (
                  <table>
                    <thead>
                      <tr>
                        <th scope="col"> Taille </th>
                        <th scope="col"> Quantite </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.toutesLesTailles.map((taille, i) => (
                        <tr key={i}>
                          <th scope="row" id={taille._id}>
                            {taille.taille}{" "}
                          </th>
                          <td>
                            <input name="taille" id={taille._id} type="text" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div className="form">
              <button className="btn">Ajouter!</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(FormArticle);
