import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import ClientRegister from './pages/ClientRegister/ClientRegister.js';
import ProviderRegister from './pages/ProviderRegister/ProviderRegister.js';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >

      <Switch>

        <Route exact path='/register/client'>
          <ClientRegister />
        </Route>

        <Route exact path='/register/provider'>
          <ProviderRegister />
        </Route>

      </Switch>

    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

