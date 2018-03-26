
/**
 * Created by jhonyoung on 2017/10/29.
 * 一级页面
 */
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Login from './login.jsx';
import Content from './content.jsx';
import {CLComponent} from '../../src/lib/component/index';
import './layout.less'

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