import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import { routerRedux } from 'dva/router';

const FormItem = Form.Item
class Login extends React.Component {
  componentWillMount() {
    if (this.props.login.token) {
      this.props.dispatch(routerRedux.push('/dashboard'))
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'login/login',
          payload: values,
        });
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="flex column jc-center ai-center">
        <h2>Log in</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input placeholder="username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }]
            })(
              <Input type="password" placeholder="password" />
              )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >Log in</Button>
          </FormItem>
        </Form>
        <p>可选账号admin, guest, pm, ui, dev, qa, bowen, 密码和账号一样</p>
      </div>
    );
  }
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(Form.create()(Login));
