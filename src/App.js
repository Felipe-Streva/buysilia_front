import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Session} from './SessionContext'

import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientRegister from "./pages/ClientRegister/ClientRegister.js";
import ProviderRegister from "./pages/ProviderRegister/ProviderRegister.js";
import HomePage from "./pages/HomePage/HomePage.js";
import ClientLogin from "./pages/ClientLogin/ClientLogin.js";
import ProviderLogin from "./pages/ProviderLogin/ProviderLogin.js";
import ProviderEdit from './pages/ProviderEdit/ProviderEdit.js';
import ClientEdit from "./pages/ClientEdit/ClientEdit";


export default function App(){

    return (

        <Session>
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
      
                    <Route exact path="/edit/client">
                       <ClientEdit />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Session>
    )
}