import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import ProtectedButton from '../router/ProtectedButton'

function DashBoard({ login }) {
  const handleClick = () => { }

  return (
    <div>
      Route Component: DashBoard
      <p>你的权限:{JSON.stringify(login.roles)}</p>
      <Button.Group>
        <ProtectedButton roles={["dev"]} onClick={() => handleClick("hehe")} type="primary">dev</ProtectedButton>
        <ProtectedButton roles="pm,dev">pm,dev</ProtectedButton>
        <ProtectedButton roles="ui">ui</ProtectedButton>
        <ProtectedButton roles="pm,qa">pm,qa</ProtectedButton>
      </Button.Group>
    </div>
  );
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(DashBoard);
