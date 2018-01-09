import React from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import './MainLayout.less';

const { Header, Footer, Sider, Content } = Layout

class MainLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
    theme: 'dark',
  };
  componentWillMount() {
    const { login, dispatch } = this.props
    if (!login.token) {
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
    const { children, dispatch, history } = this.props
    const currentPathNames = history.location.pathname.split('/').slice(2)
    // console.log(currentPathNames);
    return (
      <Layout id="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          {/* todo 面包屑&多级嵌套 */}
          <Menu theme={this.state.theme} mode={this.state.mode} selectedKeys={currentPathNames}>
            <Menu.Item key="dashboard">
              <Link to="dashboard"><Icon type="user" /><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.SubMenu key="list" title={<span><Icon type="team" /><span>Some Title</span></span>}>
              <Menu.Item key="list">
                <Link to="list"><Icon type="team" />Some List</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
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
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(MainLayout);
