import React from 'react';
import {CLComponent} from '../../../src/lib/component/index';
import createG2 from 'g2-react';
import G2 from 'g2';

export default class LinerSample extends CLComponent {
  constructor (props, options) {
    super(props);
  }

  render() {
    let {data, width, height, axisX, axisY} = this.props.settings;
    const Chart = createG2(chart => {

      chart.col('name', {
        alias: axisX,
        range: [0, 1],
      });
      chart.col('value', {
        alias: axisY
      });

      chart.line().position('name*value').size(2);
      chart.render();
    });

    return (
      <div>
        <Chart data={data} width={width} height={height} forceFit={true} />
      </div>)
  } 
}

/***** example *********
let pieSettings = { //必须是name,value 结构
  
let data = [
      {name: 'Jan', value: 7.0},
      {name: 'Feb', value: 6.9},
      {name: 'Mar', value: 9.5},
      {name: 'Apr', value: 14.5},
      {name: 'May', value: 18.2},
      {name: 'Jun', value: 21.5},
      {name: 'Jul', value: 25.2},
      {name: 'Aug', value: 26.5},
      {name: 'Sep', value: 23.3},
      {name: 'Oct', value: 18.3},
      {name: 'Nov', value: 13.9},
      {name: 'Dec', value: 9.6}
    ],
    width = 500,
    height = 450;

******/

