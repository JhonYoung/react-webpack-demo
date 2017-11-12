
/**
 * Created by jhonyoung on 2017/10/29.
 * 导航框架，侧边栏，退出登录
 */


import reqwest from 'reqwest';
import Interface from '../../src/interface/index.js';
import React from 'react';
import ClRouter from '../router/router.jsx';
import CLMenu from './sider.jsx';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Col, Row, message} from 'antd';
import CLComponent from '../../src/lib/component/CLComponent.jsx';

const {contentType, logout} = Interface;
const { Header, Content, Sider, Footer } = Layout;

class CLContent extends CLComponent {
  state = {
    visible: false,
    login: true
  };

  constructor (props) {
    super(props);
    this.bindCtx([
      "handleVisibleChange",
      "handleLoginOut"
    ]);
  }


  handleLoginOut = (e) => {
    let logutSettings = {
      contentType,
      type: logout.type,
      url: logout.url
    }
    let that = this;

    const pro = reqwest(logutSettings);
    pro.then( function (doc) {
      if (doc) {
        message.success("登出成功");
        that.setState({login: false});
        sessionStorage.removeItem("roles");
        sessionStorage.removeItem("loginName");
        location.hash = '/login'
      }
    })
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  render () {
    let loginName = sessionStorage.getItem("loginName");
    const menu = (
      <Menu onClick={this.handleLoginOut}>
        <Menu.Item key="1">login out</Menu.Item>
      </Menu>
    );

    return (
      <Layout className="layout">
        <Header className="layout-header">
        <Row>
          <Col  span={21} className="layout-title"> Cashlending Back-end Management System </Col>
          <Col span={3}>
            <Dropdown overlay={menu}
              onVisibleChange={this.handleVisibleChange}
              visible={this.state.visible}
            >
              <a className="ant-dropdown-link" href="javascript:;">
                welcome, {loginName} <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
        </Header>
        <Layout>
          <Sider className="layout-sider">
            <CLMenu/>
          </Sider>
          <Content className="layout-content">
            <Breadcrumb className="layout-breadcrumb">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <ClRouter/>
          </Content>
        </Layout>
        <Footer className="layout-footer">www.cashlending.cn © 2017-2020</Footer>
      </Layout>
    )
  }
}

export default CLContent;
