import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './Home';
import Usuarios from './Usuarios';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/"  Component={Home} />
        <Route path="/usuarios" Component={Usuarios} />
      </Switch>
    </Router>
  );
}

export default Routes;
