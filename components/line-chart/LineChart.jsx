import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts";

// 数据源
const data = [
  { time: '00:00', count: 275 },
  { time: '00:30', count: 115 },
  { time: '01:00', count: 120 },
  { time: '01:30', count: 350 },
  { time: '02:00', count: 150 },
  { time: '02:30', count: 115 },
  { time: '03:00', count: 120 },
  { time: '03:30', count: 350 },
  { time: '04:00', count: 150 },
  { time: '04:30', count: 115 },
  { time: '05:00', count: 120 },
  { time: '05:30', count: 350 },
  { time: '06:00', count: 150 },
  { time: '06:30', count: 115 },
  { time: '07:00', count: 120 },
  { time: '07:30', count: 350 },
  { time: '08:00', count: 150 },
  { time: '08:30', count: 115 },
  { time: '09:00', count: 120 },
  { time: '09:30', count: 350 },
  { time: '10:00', count: 150 },
  { time: '10:30', count: 115 },
  { time: '11:00', count: 120 },
  { time: '11:30', count: 350 },
  { time: '12:00', count: 150 },
  { time: '12:30', count: 115 },
  { time: '13:00', count: 120 },
  { time: '13:30', count: 350 },
  { time: '14:00', count: 150 },
  { time: '14:30', count: 350 },
  { time: '15:00', count: 150 },
  { time: '15:30', count: 115 },
  { time: '16:00', count: 120 },
  { time: '16:30', count: 350 },
  { time: '17:00', count: 150 },
  { time: '17:30', count: 350 },
  { time: '18:00', count: 150 },
  { time: '19:30', count: 115 },
  { time: '20:00', count: 120 },
  { time: '20:30', count: 350 },
  { time: '21:00', count: 150 },
  { time: '21:30', count: 120 },
  { time: '22:00', count: 150 },
  { time: '22:30', count: 350 },
  { time: '23:00', count: 150 },
  { time: '23:30', count: 115 },
  { time: '24:00', count: 120 }
];

// 定义度量
const scale = {
  time: { alias: '时间点' },
  count: { alias: '报警次数' }
};

const testTitle = '哈哈哈哈';

const handlePointClick = (ev) => {
  alert(123);
  console.log(ev);
}

export default class LineChart extends React.Component {
  render() {
    return (
    <Chart forceFit height={400} data={data}>
    <Axis name="time" title />
    <Axis name="count" title />
    <Tooltip
      crosshairs={false}
      useHtml
      htmlContent={(title, items) => {
        return `
        <div class="g2-tooltip">
          <div class="g2-tooltip-title">${testTitle} </div>
          <Chart forceFit height={400} data={data} scale={scale}>
            <Axis name="time" title />
            <Axis name="count" title />
            <Geom type="line" position="time*count" />
          </Chart>
        `;
      }}
    />
    <Geom type="line" position="time*count" />
    <Geom
      type="point"
      position="time*count"
      size={4}
      shape={'circle'}
      style={{
        stroke: '#fff',
        lineWidth: 1
      }}
    />
    {/* <Geom shape={['count', ['circle', 'rect']]} /> */}
  </Chart>
    );
  }
}

