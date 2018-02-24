import React from 'react';
import { withRouter } from 'dva/router';

function Ordinary({ location: { pathname } }) {
  return (
    <div>
      普通路由: {pathname}
    </div>
  );
}

export default withRouter(Ordinary);
