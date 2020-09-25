import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Component1 from './aninhadas/component1';
import Component2 from './aninhadas/component2';

const RoutesApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={()=><h1>padrao</h1>} />
      <Route exact path='/component1' component={Component1} />
      <Route exact path='/component2' component={Component2} />
    </Switch>
  );
}

export default RoutesApp;