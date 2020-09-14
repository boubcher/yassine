import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Component/Home';
import * as serviceWorker from './serviceWorker';
import Firebase from '../src/Component_config/FirabaseConfig';
import FirebaseContext from '../src/Component_config/Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inscription from '../src/Component_auth/Inscription';
import Connexion from '../src/Component_auth/Connexion';
import Steroides from '../src/Component/Steroides';
import Suplement from '../src/Component/Suplement';
import AnotherProduit from '../src/Component/AnotherProduct';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
    <Switch>
    <Route path="/Home" component={Home}    />
    <Route path="/Inscription" component={Inscription} />
    <Route exact path="/" component={Connexion} />
    <Route path="/Steroides" component={Steroides} />
    <Route path="/Suplement" component={Suplement} />
    <Route path="/Another" component={AnotherProduit} />
    </Switch>
    </Router>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
