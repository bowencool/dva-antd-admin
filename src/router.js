import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { Login, MainLayout, DashBoard, List, NotFound } from "./routes";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* todo 移除'/main' */}
        <Route
          path="/main"
          strict
          render={() => (
            <MainLayout history={history}>
              <Switch>
                {/* todo ProtectedRoute */}
                <Route exact path="/main/dashboard" component={DashBoard} />
                <Route exact path="/main/list" component={List} />
                <Redirect to="/main/dashboard" />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </MainLayout>
          )}
        />
        <Route exact path="/login" component={Login} />
        <Redirect exact from="/" to="/main/dashboard" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
