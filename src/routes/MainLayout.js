import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
// import styles from './MainLayout.css';

function MainLayout({ children, login, dispatch }) {
  if (!login.token) {
    dispatch(routerRedux.push('/login'))
  }
  return (
    <div>
      Route Component: MainLayout
      <button onClick={() => dispatch({ type: 'login/logout' })}>log out</button>
      <div style={{ background: '#ccc' }}>{children}</div>
    </div>
  );
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(MainLayout);
