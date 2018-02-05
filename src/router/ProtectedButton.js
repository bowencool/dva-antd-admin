import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { hasPermission } from './permission';

const ProtectedButton = ({ userRoles, roles, children, ...rest }) => {
  return hasPermission(userRoles, roles) ?
    <Button {...rest}>{children}</Button> :
    null
}
export default connect(({ login: { roles } }) => ({ userRoles: roles }))(ProtectedButton);
