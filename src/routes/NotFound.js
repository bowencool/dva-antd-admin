import React from 'react';
import { connect } from 'dva';
import styles from './NotFound.css';

function NotFound() {
  return (
    <div className={styles.normal}>
      Route Component: 404 NotFound !
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NotFound);
