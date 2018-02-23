import React from 'react';
import { connect } from 'dva';
import { Link, Route, withRouter } from 'dva/router';
import { Table, Tag } from 'antd'
import Detail from '../components/Detail'

class List extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/get'
    })
  }
  columns = [
    {
      title: '用户名',
      dataIndex: 'account',
    },
    {
      title: '角色/权限',
      dataIndex: 'roles',
      render: roles => <div>{roles.map(role =>
        <Tag key={role} color="blue">{role}</Tag>
      )}</div>
    },
    {
      title: "操作",
      // key: 'action',
      render: (text, record) => <Link to={`/list/${record.account}`}>详情</Link>
    }
  ]
  render() {
    const { list, match: { path } } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={list}
          bordered
          size="small"
          pagination={false}
          rowKey={record => record.account}
        />
        <Route path={`${path}/:account`} component={Detail} />
      </div>
    );
  }
}

function mapStateToProps({ list }) {
  return { list };
}

export default withRouter(connect(mapStateToProps)(List));
