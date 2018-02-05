import React from 'react';
import { connect } from 'dva';
import { Link, Route, withRouter } from 'dva/router';

function List() {
  return (
    <div>
      Route Component: List
      <ul>
        <li><Link to="/list/123">123</Link></li>
        <li><Link to="/list/456">456</Link></li>
      </ul>
      <Route path="/list/:id(\d{3,})" render={({ match }) => <p>detail:{match.params.id}</p>} />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(List));
