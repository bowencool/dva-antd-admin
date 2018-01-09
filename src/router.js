import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { Login, MainLayout, DashBoard, List, NotFound } from "./routes";

const routes = [
  {
    path: '/dashboard',
    component: DashBoard,
    exact: true,
  },
  {
    path: '/list', // 此处应为菜单的key
    component: List,
    exact: true,
    // subRoutes: [],
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const route2Route = ({ subRoutes, redirect, path, ...rest }, key) => (
  redirect ? <Redirect key={key} from={path} to={redirect} />
    : <Route key={key} path={path} {...rest} />
)

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={NotFound} />
        <Route
          path="/"
          strict
          render={() => (
            <MainLayout history={history}>
              <Switch>
                {routes.map(route2Route)}
              </Switch>
            </MainLayout>)}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
