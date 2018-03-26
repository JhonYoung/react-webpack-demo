import React from 'react';
import ReactDom from 'react-dom';
import Layout from './layout/layout.jsx';
import '../src/assets/font/iconfont.js';

// antd 的样式依赖
import 'antd/dist/antd.min.css';
import './assets/css/style.less';


ReactDom.render (
  <Layout />,
  document.getElementById('app')
)