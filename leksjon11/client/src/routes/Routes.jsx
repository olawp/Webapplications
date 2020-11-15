import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/Polls';

import CreateUser from '../pages/createUser.jsx';
import CreatePoll from '../pages/createPoll.jsx';
import Results from '../pages/results';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Polls />
        </Route>
        <Route exact path="/createuser">
          <CreateUser />
        </Route>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
