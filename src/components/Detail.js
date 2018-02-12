import React from 'react';
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
    const { match: { params: { account } } } = this.props
    getDetail(account)
      .then((detail) => {
        this.setState(() => ({ detail }))
      })
      .catch(({ message }) => {
        this.setState({ detail: message })
      })
  }

  render() {
    const { match: { params: { account } } } = this.props
    return (
      <Card title={account} style={{ margin: "20px" }}>
        <pre>
          {JSON.stringify(this.state.detail, null, 2)}
        </pre>
      </Card>
    );
  }
}

export default Detail;
