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
        <Route
          path="/main"
          strict
          render={() => (
            <MainLayout>
              <Switch>
                {/* <Route path="/" exact component={DashBoard} /> */}
                <Route path="/main/dashboard" exact component={DashBoard} />
                <Route path="/main/list" component={List} />
                <Route component={NotFound} />
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
