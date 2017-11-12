import React from 'react';
import ReactDom from 'react-dom';
import Layout from './layout/layout.jsx';
import '../src/css/style.css';
import '../src/assets/font/iconfont.js';
import 'antd/dist/antd.min.css';

ReactDom.render (
  <Layout />,
  document.getElementById('app')
)