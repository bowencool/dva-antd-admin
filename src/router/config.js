// 仅用于生成菜单及相关路由, 不含Content内部嵌套
import { NotFound, DashBoard, List, List2, Ordinary, ChartsEG, Protected } from "../routes";
import Detail from '../components/Detail'

export default [
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
        path: '/list2/:account',
        component: Detail,
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
    path: '/charts',
    title: '图表',
    icon: 'area-chart',
    component: ChartsEG,
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
