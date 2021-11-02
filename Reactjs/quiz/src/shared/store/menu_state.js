import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { atom } from "recoil";
import Home from '../../pages/home/home';

export const menuState = atom({
  key: 'menuState',
  default: [
    {
      href: '/Home', text: 'Home',
    }
  ],
});

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>


      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default AppRouter;