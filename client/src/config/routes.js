import React from 'react';
import { Route, IndexRoute, DefaultRoute } from 'react-router';

import App from '../components/app';
import HomeState from '../components/HomeState';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Login from '../components/Login';
import RequireAuth from '../HOF/require_auth';


export default (
  <Route path='/' component={App} >
    <IndexRoute component={HomeState} />
    <Route path="pappi1" component={RequireAuth(Page1)} />
    <Route path="pappi2" component={Page2} />
    <Route path="login" component={Login} />
    {/* <DefaultRoute handler={App} /> */}
  </Route>
);
