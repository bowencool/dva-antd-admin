import React from 'react';
import { connect } from 'dva';
import styles from './DashBoard.css';

function DashBoard() {
  return (
    <div className={styles.normal}>
      Route Component: DashBoard
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DashBoard);
