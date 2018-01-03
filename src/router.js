import React from 'react';
import { Router, Route, Switch } from 'dva/router';

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
        <Route
          path="/"
          render={() => (
            <MainLayout>
              <Switch>
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/list" component={List} />
                {/* <Redirect to="/notfound"/> */}
              </Switch>
            </MainLayout>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
