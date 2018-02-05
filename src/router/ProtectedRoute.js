import React from 'react';
import { Route } from 'dva/router';
import { connect } from 'dva';
import { NotAllowed } from '../routes';

export const hasPermission = (userRoles, routeRoles) => {
  if (!routeRoles || userRoles.includes('admin')) return true
  for (const role of userRoles) {
    if (routeRoles.includes(role)) return true
  }
  return false
}

const ProtectedRoute = ({ userRoles, routeRoles, ...rest }) => {
  return (<div>
    <p>您的权限: {JSON.stringify(userRoles)} (admin拥有所有权限)</p>
    <p>路由访问权限: {JSON.stringify(routeRoles)}</p>
    {hasPermission(userRoles, routeRoles) ? <Route {...rest} /> : <NotAllowed />}
  </div>)
}

export default connect(({ login: { roles } }) => ({ userRoles: roles }))(ProtectedRoute);
