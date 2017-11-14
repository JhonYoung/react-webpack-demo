import React from 'react';
import ReactDom from 'react-dom';
import Layout from './layout/layout.jsx';
import '../src/assets/font/iconfont.js';

import '../src/assets/css/style.css'; //自定义样式
import '../src/assets/font/iconfont.css'; //字体样式
import 'antd/dist/antd.min.css'; //蚂蚁组件样式

// import '../src/assets/css/style.css';
ReactDom.render (
  <Layout />,
  document.getElementById('app')
)