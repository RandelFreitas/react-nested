import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/main';

const Rotas = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/app' component={Main}/>
    </Switch>
  </BrowserRouter>  
)

export default Rotas;