import React from 'react';
import {CLComponent} from '../../../src/lib/component/index';
import createG2 from 'g2-react';
import G2 from 'g2';

const Frame = G2.Frame;

export default class Histogram extends CLComponent {
  constructor (props, options) {
    super(props);
  }

  state = {
    data: [],
    forceFit: true,
    width: 500,
    height: 450,
    plotCfg: {
      margin: [20, 60, 80, 120]
    }
  }

  componentDidMount() {
    const self = this;
    let frame = new Frame(this.props.settings.data);
    frame = Frame.sort(frame, 'release');
    self.setState({
      data: frame
    });
  }

  render() {
    let {data, width, height, axisX, axisY} = this.props.settings;
    const plotCfg = {
      margin: 50
    };

    const Chart = createG2(chart => {
      const Stat = G2.Stat;
      chart.setMode('select'); // 开启框选模式
      chart.select('rangeX'); // 设置 X 轴范围的框选 
      chart.col('name', {
        alias: axisX,
        tickInterval: 20,
      });
      chart.col('value', {
        alias: axisY
      });
      chart.interval().position(Stat.summary.count('value')).color('#fc885e');
      chart.render();
      // 监听双击事件，这里用于复原图表
      chart.on('plotdblclick', function(ev) {
        chart.get('options').filters = {}; // 清空 filters
        chart.repaint();
      });
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

