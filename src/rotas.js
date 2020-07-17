import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/main';

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/app' component={Main}/>
    </Switch>
  </BrowserRouter>  
)

export default Rotas;