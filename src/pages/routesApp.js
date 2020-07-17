import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Component1 from './aninhadas/component1';
import Component2 from './aninhadas/component2';

const RoutesApp = () => {
  const match = useRouteMatch();
  
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={()=><h1>padrao</h1>} />
      <Route exact path={`${match.url}/component1`} component={Component1} />
      <Route exact path={`${match.url}/component2`} component={Component2} />
    </Switch>
  );
}

export default RoutesApp;