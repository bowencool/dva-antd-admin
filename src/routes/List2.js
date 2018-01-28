import React from 'react';
import { connect } from 'dva';
import { Link, withRouter } from 'dva/router';

function List() {
  return (
    <div>
      Route Component: List2
      <ul>
        <li><Link to="/list2/123">123</Link></li>
        <li><Link to="/list2/456">456</Link></li>
      </ul>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(List));
