import Login from 'features/login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function OutsideRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default OutsideRouter;