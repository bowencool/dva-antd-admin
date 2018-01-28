import React from 'react';
// import { connect } from 'dva';
import { Route, Switch, Redirect, Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import { DashBoard, List, Nav21, Nav22, Protected } from "../routes";

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
    subRoutes: [
      {
        path: '/list',
        title: '列表示例',
        component: List,
        exact: true,
      },
      {
        path: '/nav2',
        components: Protected,
        title: '递归嵌套',
        subRoutes: [
          {
            path: '/nav21',
            component: Nav21,
            title: 'nav21',
            exact: true,
          },
          {
            path: '/nav2protected',
            component: Protected,
            roles: ['admin'],
            title: '需要权限',
            exact: true,
          },
          {
            path: '/nav22',
            component: Nav22,
            title: 'nav22',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    path: '/protected',
    title: '权限测试',
    roles: ['admin'],
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
      routes.push(<Route key={path + index} path={path} {...rest} />)
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
