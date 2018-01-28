import React from 'react';
// import { connect } from 'dva';
import { Route, Switch, Redirect, Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import { NotFound, DashBoard, List, List2, Ordinary, Protected } from "../routes";
import ProtectedRoute from './ProtectedRoute';

const { Item: MenuItem, SubMenu } = Menu
// 仅用于生成菜单及相关路由, 不含Content内部嵌套
const routesAndMenus = [
  {
    path: '/dashboard', // 路由path, Redirect的from, 菜单key
    title: '首页', // 菜单文本, 不填则不会生成菜单
    icon: 'dashboard', // 菜单图标
    component: DashBoard, // 路由component
    strict: true, // 其他可以被无损转发到Route, Menu.Item的prop
  },
  {
    // path: '/menu1',
    // component: Protected,
    title: '主菜单1',
    icon: 'appstore-o',
    subRoutes: [
      {
        path: '/list',
        title: '路由嵌套示例',
        icon: 'bars',
        component: List,
      },
      {
        path: '/list2',
        title: '路由嵌套示例2',
        icon: 'bars',
        component: List2,
        exact: true,
      },
      {
        path: '/list2/:id(\\d+)',
        render: ({ match }) => <div>detail: {match.params.id}</div>,
      },
      {
        path: '/nav2',
        components: Protected,
        title: '递归嵌套(菜单)',
        icon: 'switcher',
        subRoutes: [
          {
            path: '/nav21',
            component: Ordinary,
            title: 'nav21',
            exact: true,
          },
          {
            path: '/devpm',
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
    path: '/', // Redirect的from
    exact: true,
    redirect: '/dashboard', // Redirect
  },
  {
    component: NotFound,
  }
]

function LayoutContentRoutes() {
  const routes = []
  const handleRoute = ({ redirect, path, subRoutes = [], roles, ...rest }, index) => {
    if (redirect) {
      routes.push(<Redirect key={path + index} from={path} to={redirect} {...rest} />)
      return
    }
    if (subRoutes.length === 0) {
      routes.push(roles ?
        <ProtectedRoute key={path + index} path={path} routeRoles={roles} {...rest} /> :
        <Route key={path + index} path={path} {...rest} />)
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

const route2Menu = ({ path, redirect, subRoutes = [], title, icon = "question-circle-o" }, index) => {
  if (redirect || !title) {
    return null
  }
  return (
    subRoutes.length ?
      <SubMenu
        key={path + index}
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
