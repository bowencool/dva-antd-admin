import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { hasPermission } from './permission';

/* eslint-disable no-unused-vars */
const ProtectedButton = ({ userRoles, roles, children, dispatch, ...rest }) => {
  return hasPermission(userRoles, roles) ?
    <Button {...rest}>{children}</Button> :
    null
}
export default connect(({ login: { roles } }) => ({ userRoles: roles }))(ProtectedButton);
