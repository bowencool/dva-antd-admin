import React from 'react';
import { connect } from 'dva';
import { routerRedux, withRouter } from 'dva/router';
import { Layout, Icon } from 'antd';
import { Menus } from '../router/permission'
import './MainLayout.less';

const { Header, Sider, Content } = Layout

class MainLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
    theme: 'dark',
  };
  componentDidMount() {
    const { login, dispatch } = this.props
    if (!login.token) {
      // console.log('go login', login.token);
      dispatch(routerRedux.push('/login'))
    }
  }
  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical'
    });
  }
  render() {
    const { children, dispatch, location: { pathname } } = this.props
    // const pathSnippets = location.pathname.split('/').slice(1)
    // console.log(pathSnippets);
    return (
      <Layout id="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          {/* todo 自动高亮(刷新,后退)&&面包屑 */}
          <Menus theme={this.state.theme} mode={this.state.mode} selectedKeys={[pathname]} />
        </Sider>
        <Layout>
          <Header>
            {/* todo 旋转 */}
            <Icon
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggleCollapse}
            />
            <Icon
              className="fr"
              type="logout"
              onClick={() => dispatch({ type: 'login/logout' })}
            />
          </Header>
          <Content style={{ padding: "20px" }}>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps({ login }) {
  return { login };
}

export default withRouter(connect(mapStateToProps)(MainLayout));
