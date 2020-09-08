import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Nouveautes from "./Views/Nouveautes";
import AjoutArticle from "./Views/GestionCatalogue/AjoutArticle";
import GestionnaireBO from "./Views/GestionCatalogue/GestionnaireBO";
import AjoutCouleur from "./Views/GestionCatalogue/AjoutCouleur";
import "./App.css";
import LookBook from "./Views/LookBook";
import LesBoutiques from "./Views/LesBoutiques";
import LesRobes from "./Views/LesRobes";
import MonArticle from "./Views/MonArticle";
import Recherche from "./Views/Resultat-recherche";
import Accessoires from "./Views/LesAccessoires";
import Bas from "./Views/LesBas";
import Mailles from "./Views/LesMailles";
import ManteauxVestes from "./Views/LesManteauxVestes";
import Tops from "./Views/LesTops";

import WithUser from "./Views/WithUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/nouveautes" component={Nouveautes} />
        <Route path="/LookBook" component={LookBook} />
        <Route path="/LesBoutiques" component={LesBoutiques} />
        <Route path="/LesRobes" component={LesRobes} />
        <Route path="/Accessoires" component={Accessoires} />
        <Route path="/Bas" component={Bas} />
        <Route path="/Tops" component={Tops} />
        <Route path="/Mailles" component={Mailles} />
        <Route path="/ManteauxVestes" component={ManteauxVestes} />
        <Route path="/Administration" component={GestionnaireBO} />
        <Route path="/GestionCouleur" component={AjoutCouleur} />
        <Route path="/GestionArticle" component={AjoutArticle} />
        <Route path="/articles/detail/:id" component={MonArticle} />
        <Route
          path="/Resultat/:parametres"
          render={(props) => (
            <WithUser {...props} component={Recherche}></WithUser>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
