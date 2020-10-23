import React from "react";
import ReactGA from "react-ga";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Views/Home";
import HomewithoutNews from "./Views/HomewithoutNews";
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

const trackingId = "G-01FJEHG9DS"; // Replace with your Google Analytics tracking ID
const history = createBrowserHistory();
ReactGA.initialize(trackingId);
/*ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});*/
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <div className="App">
      <Switch>
        <Route history={history} exact path="/" component={Home} />
        <Route history={history} path="/Home" component={HomewithoutNews} />
        <Route history={history} path="/nouveautes" component={Nouveautes} />
        <Route history={history} path="/LookBook" component={LookBook} />
        <Route
          history={history}
          path="/LesBoutiques"
          component={LesBoutiques}
        />
        <Route history={history} path="/LesRobes" component={LesRobes} />
        <Route history={history} path="/Accessoires" component={Accessoires} />
        <Route history={history} path="/Bas" component={Bas} />
        <Route history={history} path="/Tops" component={Tops} />
        <Route history={history} path="/Mailles" component={Mailles} />
        <Route
          history={history}
          path="/ManteauxVestes"
          component={ManteauxVestes}
        />
        <Route
          history={history}
          path="/Administration"
          component={GestionnaireBO}
        />
        <Route
          history={history}
          path="/GestionCouleur"
          component={AjoutCouleur}
        />
        <Route
          history={history}
          path="/GestionArticle"
          component={AjoutArticle}
        />
        <Route
          history={history}
          path="/articles/detail/:id"
          component={MonArticle}
        />
        <Route
          history={history}
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
