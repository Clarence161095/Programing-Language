import React from 'react';
import { Route, Switch } from "react-router-dom";
import { atom } from "recoil";
import Home from '../../pages/home/home'
import Login from '../../pages/login/login'

export const menuState = atom({
  key: 'menuState',
  default: [
    {
      href: '/Home', text: 'Home',
    },
    {
      href: '/Login', text: 'Login',
    },
  ],
});

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </Switch>
  );
}

export default AppRouter;