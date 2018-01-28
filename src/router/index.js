import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LayoutContentRoutes from './permission'

import { Login, MainLayout, NotFound, NotAllowed } from "../routes";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/403" component={NotAllowed} />
        <Route exact path="/404" component={NotFound} />
        <Route
          render={() => (<MainLayout>
            <LayoutContentRoutes />
          </MainLayout>)}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
