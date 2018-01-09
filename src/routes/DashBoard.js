import React from 'react';
import { connect } from 'dva';

function DashBoard() {
  return (
    <div>
      Route Component: DashBoard
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DashBoard);
