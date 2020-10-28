import React from "react";
import ReactGA from "react-ga";
import { Route, Router, Switch } from "react-router-dom";
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

//google analytics
console.log("test 1", ReactGA);
const trackingId = "G-RWHK7EF25Z"; // Replace with your Google Analytics tracking ID
const history = createBrowserHistory();
ReactGA.initialize(
  [
    {
      trackingId: trackingId,
      gaOptions: {
        name: "tracker1",
        userId: 123,
      },
    },
    {
      trackingId: trackingId,
      gaOptions: { name: "tracker2" },
    },
  ],
  { debug: true, alwaysSendToDefaultTracker: false }
);

/*ReactGA.initialize(trackingId);*/
ReactGA.pageview("/home");
/*ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});*/
history.listen((location) => {
  console.log("on rentre dans la fonction ", location.pathname);
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
console.log("test 2", ReactGA);

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={HomewithoutNews} />
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
      </Router>
    </div>
  );
}

export default App;
