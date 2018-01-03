import React from 'react';
import { Router, Route, Switch } from 'dva/router';

// import IndexPage from './routes/IndexPage';
import MainLayout from "./routes/MainLayout.js";
import Login from "./routes/Login.js";
import NotFound from "./routes/NotFound.js";
import DashBoard from "./routes/DashBoard.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route children={() => (
          <MainLayout>
            <Switch>
              <Route path="/dashboard" component={DashBoard} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        )}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
