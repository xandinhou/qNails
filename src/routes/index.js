import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
