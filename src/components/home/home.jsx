import React from 'react';
import { Button } from 'antd';
import { Pie, Circular, LinerSample, Histogram } from '../../../src/lib/g2/index.js';

class Home extends React.Component {
  render () {
    let pieSettings = { //必须是name,value 结构
      data: [
        // {name: 'Microsoft Internet Explorer', value: 56.33 },
        // {name: 'Chrome', value: 24.03},
        // {name: 'Firefox', value: 10.38},
        // {name: 'Safari',  value: 4.77},
        {name: 'Opera', value: 0.91},
        {name: 'ae', value: 21},
        {name: 'ae1', value: 21},
        {name: 'ae2', value: 25},
        {name: 'ae3', value: 43},
        {name: 'ae4', value: 40},
        {name: 'ae5', value: 10},
        {name: 'ae6', value: 52},
        {name: 'ae7', value: 12},

        {name: 'ae8', value: 12},
        {name: 'ae9', value: 10},
        {name: 'ae10', value: 10},
        {name: 'ae11', value: 11},
        {name: 'ae12', value: 14},
        {name: 'ae13', value: 16},
        {name: 'ae14', value: 70},
        {name: 'ae15', value: 32},
        {name: 'ae16', value: 61},
      ],
      forceFit: true,
      width: 500,
      height: 400,
      axisY: "hello",
      axisX: "world"
    }


    return (
      <div>
        Home-content
        <Histogram settings = {pieSettings} />
      </div>
    )
  }
}

export default Home;
// <Circular settings = {pieSettings} />