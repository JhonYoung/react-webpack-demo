
/**
 * Created by jhonyoung on 2017/10/29.
 * 一级页面
 */
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Login from './login.jsx';
import Content from './content.jsx';
import {CLComponent} from '../../src/lib/component/index';

class Layout extends CLComponent {

  render () {
    return (
      <Router>
        <div>
          <Route key="layoutContent" path={`/uplending`} component={Content} />
          <Route key="login" path={`/login`} component={Login} />
        </div>
      </Router>
    )
  }
}

export default Layout;


















// (<Route key="login" path={`/uplending/login`} component={Login} />)



// {
//   this.state.login ? 
//   (<Layout className="layout">
//     <Header className="layout-header">
//     <Row>
//       <Col  span={21} className="layout-title"> Cashlending Back-end Management System </Col>
//       <Col span={3}>
//         <Dropdown overlay={menu}
//           onVisibleChange={this.handleVisibleChange}
//           visible={this.state.visible}
//         >
//           <a className="ant-dropdown-link" href="javascript:;">
//             welcome, {loginName} <Icon type="down" />
//           </a>
//         </Dropdown>
//       </Col>
//     </Row>
//     </Header>
//     <Layout>
//       <Sider className="layout-sider">
//         <CLMenu/>
//       </Sider>
//       <Content className="layout-content">
//         <Breadcrumb className="layout-breadcrumb">
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <ClRouter/>
//       </Content>
//     </Layout>
//     <Footer className="layout-footer">www.cashlending.cn © 2017-2020</Footer>
//   </Layout>) :
//   (<Route key="login" path={`/uplending/login`} component={Login} />)
// }