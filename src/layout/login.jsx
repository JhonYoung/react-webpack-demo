import React from 'react';
import Interface from '../../src/interface/index.js';
import _ from 'lodash';
import reqwest from 'reqwest';

import CLComponent from '../../src/lib/component/CLComponent.jsx';
import { Form, Icon, Input, Button, Checkbox, Col, Row, message} from 'antd';
const FormItem = Form.Item;
const {dologin, contentType, getOperateResources} = Interface;

class Login extends CLComponent {
  state = {
    loading: false
  }

  constructor (props) {
    super(props);
    this.bindCtx([
      "handleSubmit"
    ]);
  }

  handleSubmit = (e) => { /*待修改方法 跳转方法比较low*/
    e.preventDefault();
    let that = this;

    that.setState({loading: true});

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let loginSettings = {
          contentType,
          type: dologin.type,
          withCredentials: true,
          url: `${dologin.url}?loginName=${values.loginName}&password=${values.password}` 
        }

        let authSettings = {
          contentType,
          type: getOperateResources.type,
          url: getOperateResources.url
        }

        let pro = reqwest(loginSettings);
        
        pro.then( function (resp) {
          if (resp.status !== 200) {
            message.error(data.result);
            that.setState({loading: false});
            return;
          }
          
          let pro2 = reqwest(authSettings);
          pro2.then( function (res) {

            let info = JSON.parse(res.response);
            if (info.data && info.data.loginName) {
              sessionStorage.setItem("loginName", info.data.loginName);
            }

            let roles = [];
            if (info.data && info.data.resources) {
              _.map(info.data.resources, function (doc, index) {
                doc.map( function (subItem) {
                  roles.push(subItem.remark);
                })
              })
            }

            if (!roles.length) {
              message.error("您当前没有任何权限，不可操作");
              that.setState({loading: false});
            } else {
              message.success("登录成功！");
              that.setState({loading: false});
              sessionStorage.setItem("roles", JSON.stringify(roles));
              location.hash = '#/uplending/loanaudit'/*待修改方法*/
            }
          })

        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="cl-login">
        <Col span={8} offset={8} className="login-title">
          Cashlending Back-end Management System
        </Col>
        <Col span={6} offset={9}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('loginName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                Login
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const LoginForm = Form.create()(Login);
export default LoginForm;