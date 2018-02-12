import React from 'react';
import { connect } from 'dva'
import { Card } from 'antd';
import { getDetail } from '../services/list'

class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: null
    }
  }

  componentDidMount() {
    this.fetch()
    // wtf 执行了无数次，router leave的时候也执行。。。
    // this.props.history.listen(this.fetch)
    // this.props.history.listen(() => { setTimeout(this.fetch, 0) })
  }

  fetch = () => {
    const { match: { params: { account } } } = this.props
    getDetail(account)
      .then((detail) => {
        this.setState({ detail })
      })
      .catch(({ message }) => {
        this.setState({ detail: message })
      })
  }

  render() {
    const { match: { params: { account } }, list } = this.props
    const detail = list.find(l => l.account === account) || this.state.detail
    return (
      <Card title={account} style={{ margin: "20px" }}>
        <pre>
          {JSON.stringify(detail, null, 2)}
        </pre>
      </Card>
    );
  }
}

export default connect(({ list }) => ({ list }))(Detail);
