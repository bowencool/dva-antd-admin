import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import { DashBoard, List } from "./routes";

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

function LayoutContentRoutes() {
  return (
    <Switch>
      {routes.map(routeJson2Route)}
    </Switch>
  )
}

export default LayoutContentRoutes
