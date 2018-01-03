import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// import IndexPage from './routes/IndexPage';
import MainLayout from "./routes/MainLayout.js";
import Login from "./routes/Login.js";
import NotFound from "./routes/NotFound.js";
import DashBoard from "./routes/DashBoard.js";
import List from "./routes/List.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Route
          path="/"
          render={() => (
            <MainLayout>
              <Switch>
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/list" component={List} />
                <Redirect to="/404" />
              </Switch>
            </MainLayout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
