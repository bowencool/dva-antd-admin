import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LayoutContentRoutes from './permission'

import { Login, MainLayout } from "../routes";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* 404 403都放到了MainLayout内部处理 */}
        {/* <Route exact path="/404" component={NotFound} /> */}
        {/* <Route exact path="/403" component={NotAllowed} /> */}
        <Route
          render={() => (<MainLayout>
            <LayoutContentRoutes />
          </MainLayout>)}
        />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
