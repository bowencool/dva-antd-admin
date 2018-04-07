import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import { routerRedux } from 'dva/router';
import './Login.less';

const FormItem = Form.Item
class Login extends React.Component {
  componentDidMount() {
    const { login, dispatch } = this.props
    if (login.token) {
      // console.log('go dashboard', login.token);
      dispatch(routerRedux.push('/dashboard'))
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
      <div className="flex column jc-center ai-center h100p">
        <ul className="bg-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              initialValue: 'admin',
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input placeholder="username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              initialValue: 'admin',
              rules: [{ required: true, message: 'Please input your password!' }]
            })(
              <Input type="password" placeholder="password" />
              )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >登陆</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps)(Form.create()(Login));
