import React from 'react';
import {CLComponent} from '../../../src/lib/component/index';
import createG2 from 'g2-react';
import G2 from 'g2';

export default class Circular extends CLComponent {
  constructor (props, options) {
    super(props);
  }

  render() {
    let {data, width, height} = this.props.settings;
    const plotCfg = {
      margin: 50
    };

    const Chart = createG2(chart => {
      var Stat = G2.Stat;
      chart.legend({
        position: 'bottom'
      });

      chart.coord('theta', {
        radius: 1,
        inner: 0.5
      });

      chart.tooltip({
        title: null
      });

      chart.intervalStack()
        .position(Stat.summary.percent('value'))
        .color('name')
        .label('..percent', {
          offset: -20
        })
        .style({
          lineWidth: 2
        });
      chart.render();      
    });

    return (
      <div>
        <Chart data={data} width={width} height={height} plotCfg={plotCfg} forceFit={true} />
      </div>)
  } 
}

/***** example *********
let pieSettings = { //必须是name,value 结构
  
let data =  [
  {name:'亚太地区', value: 7860*0.189},
  {name:'非洲及中东', value: 7860*0.042},
  {name:'拉丁美洲', value: 7860*0.025},
  {name:'中欧和东欧', value: 7860*0.018},
  {name:'西欧', value: 7860*0.462},
  {name:'北美', value: 7860*0.265}
],
width = 500,
height = 450,
******/

