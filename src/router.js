import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LayoutContentRoutes from './permission'

import { Login, MainLayout, NotFound } from "./routes";
/*
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
    path: '/',
    exact: true,
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const routeJson2Route = ({ subRoutes, redirect, path, ...rest }, key) => (
  redirect ? <Redirect key={key} from={path} to={redirect} />
    : <Route key={key} path={path} {...rest} />
)
*/
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={NotFound} />
        <Route
          render={() => (
            <MainLayout history={history}>
              <LayoutContentRoutes />
              {/* <Switch>
                {routes.map(routeJson2Route)}
              </Switch> */}
            </MainLayout>)}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
