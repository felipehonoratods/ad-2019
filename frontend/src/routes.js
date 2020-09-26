import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Friend from './pages/Friend';
import NewFriend from './pages/NewFriend';
import EditFriend from './pages/EditFriend';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Friend} />
        <Route path="/friends/new" component={NewFriend} />
        <Route path="/friends/edit/:id" component={EditFriend} />
      </Switch>
    </BrowserRouter>
  );
};