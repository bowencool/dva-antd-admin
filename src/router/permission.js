import React from 'react';
// import { connect } from 'dva';
import { Switch, Redirect, Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import { DashBoard, List, Ordinary, Protected } from "../routes";
import ProtectedRoute from './ProtectedRoute';

const { Item: MenuItem, SubMenu } = Menu
// 仅包含LayoutContent(或菜单)路由, 不含Content内部嵌套
const routesAndMenus = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'dashboard',
    component: DashBoard,
    // exact: true,
    strict: true,
  },
  {
    // path: '/menu1',
    // component: Protected,
    title: '主菜单1',
    icon: 'appstore-o',
    subRoutes: [
      {
        path: '/list',
        title: '列表示例',
        icon: 'bars',
        component: List,
        exact: true,
      },
      {
        path: '/nav2',
        components: Protected,
        title: '递归嵌套',
        icon: 'switcher',
        subRoutes: [
          {
            path: '/nav21',
            component: Ordinary,
            title: 'nav21',
            exact: true,
          },
          {
            path: '/nav2protected',
            component: Protected,
            roles: ['dev', 'pm'],
            icon: 'lock',
            title: '权限dev,pm',
            exact: true,
          },
          {
            path: '/nav22',
            component: Ordinary,
            title: 'nav22',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    path: '/dev',
    title: '权限dev',
    icon: 'lock',
    roles: ['dev'],
    component: Protected,
  },
  {
    path: '/qaui',
    title: '权限qa,ui',
    icon: 'lock',
    roles: ['qa', 'ui'],
    component: Protected,
  },
  {
    path: '/',
    exact: true,
    redirect: '/dashboard',
  },
  {
    path: '*',
    redirect: '/404',
  }
]

function LayoutContentRoutes() {
  const routes = []
  const handleRoute = ({ redirect, path, subRoutes = [], ...rest }, index) => {
    if (redirect) {
      routes.push(<Redirect key={path + index} from={path} to={redirect} {...rest} />)
      return
    }
    if (subRoutes.length === 0) {
      routes.push(<ProtectedRoute key={path + index} path={path} {...rest} />)
      return
    }
    subRoutes.forEach(handleRoute)
  }

  routesAndMenus.forEach(handleRoute)

  return (
    <Switch>
      {routes}
    </Switch>
  )
}

// WTF?
// export default connect(({ login }) => ({ login }))(LayoutContentRoutes)
export default LayoutContentRoutes

const route2Menu = ({ path, redirect, subRoutes = [], title = "Some Title", icon = "question-circle-o" }, index) => {
  if (redirect) {
    return null
  }
  return (
    subRoutes.length ?
      <SubMenu
        key={title + index}
        title={<span><Icon type={icon} /><span>{title}</span></span>}
      >
        {subRoutes.map(route2Menu)}
      </SubMenu> :
      <MenuItem key={path}>
        {/* todo key和props的key重复? */}
        <Link to={path}><Icon type={icon} /><span>{title}</span></Link>
      </MenuItem>
  )
}

export const Menus = ({ theme, mode, selectedKeys }) => (
  <Menu theme={theme} mode={mode} selectedKeys={selectedKeys}>
    {routesAndMenus.map(route2Menu)}
  </Menu>
)
