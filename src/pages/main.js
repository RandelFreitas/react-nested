import React from 'react';
import { Link } from 'react-router-dom';
import RoutesApp from '../pages/routesApp';

const Main = () => {
  return (
    <div>
      <ul>
        <li><Link to='/component1'>Component 1</Link></li>
        <li><Link to='/component2'>Component 2</Link></li>
      </ul>
      <div>
        <RoutesApp />
      </div>
    </div>
  );
}

export default Main;