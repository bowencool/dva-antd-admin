import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import './MainLayout.less';

const { Header, Footer, Sider, Content } = Layout

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };
  componentWillMount() {
    const { login, dispatch } = this.props
    if (!login.token) {
      dispatch(routerRedux.push('/login'))
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { children, dispatch } = this.props
    return (
      <Layout id="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>list</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Icon
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
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
