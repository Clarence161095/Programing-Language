import NotFound from 'components/not-found/NotFound';
import Analytics from 'features/analytics/Analytics';
import Dashboard from 'features/dashboard/Dashboard';
import Login from 'features/login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function InsideRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/analytics">
          <Analytics />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default InsideRouter;