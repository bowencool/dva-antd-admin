import React from 'react';
import { connect } from 'dva';
import { Link, withRouter } from 'dva/router';
import { Table, Tag } from 'antd'

class List extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/get'
    })
  }
  columns = [
    {
      title: '用户名',
      key: 'account',
      dataIndex: 'account',
    },
    {
      title: '角色/权限',
      key: 'roles',
      dataIndex: 'roles',
      render: roles => <div>{roles.map(role =>
        <Tag key={role} color="blue">{role}</Tag>
      )}</div>
    },
    {
      title: "操作",
      key: 'action',
      dataIndex: 'action',
      render: (text, row) => <Link to={`/list2/${row.account}`}>详情</Link>
    }
  ]
  render() {
    const { list } = this.props
    return (
      <div>
        <Table columns={this.columns} dataSource={list} bordered size="small" pagination={false} />
      </div>
    );
  }
}

function mapStateToProps({ list }) {
  return { list };
}

export default withRouter(connect(mapStateToProps)(List));
