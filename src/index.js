import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientRegister from "./pages/ClientRegister/ClientRegister.js";
import ProviderRegister from "./pages/ProviderRegister/ProviderRegister.js";
import HomePage from "./pages/HomePage/HomePage.js";
import ClientLogin from "./pages/ClientLogin/ClientLogin.js";
import ProviderLogin from "./pages/ProviderLogin/ProviderLogin.js";
import ProviderEdit from './pages/ProviderEdit/ProviderEdit.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login/client">
          <ClientLogin />
        </Route>

        <Route exact path="/login/provider">
          <ProviderLogin />
        </Route>

        <Route exact path="/register/client">
          <ClientRegister />
        </Route>

        <Route exact path="/register/provider">
          <ProviderRegister />
        </Route>

        <Route exact path="/edit/provider">
          <ProviderEdit />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
