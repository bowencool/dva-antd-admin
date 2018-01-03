import React from 'react';
import { connect } from 'dva';
import styles from './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className={styles.normal}>
      Route Component: MainLayout
      <div style={{ background: '#ccc' }}>{children}</div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainLayout);
