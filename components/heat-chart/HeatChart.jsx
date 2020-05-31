import './heat-chart.css';
import $ from 'jquery';
import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from 'bizcharts';
import DataSet from '@antv/data-set';

window.HOST = 'http://localhost:8080/';

let data;
$.ajax({
  url: HOST + 'mock/a.json',
  async : false,
  success: (iData) => { data = iData }
});

export default class HeatChart extends React.Component {
  getMonthWeek(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthFirst = new Date(year, month, 0);
    const intervalDays = Math.round(
      (date.getTime() - monthFirst.getTime()) / 86400000
    );
    const index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
    return index;
  }
  render() {
    const { DataView } = DataSet;
    const cols = {
      month: {
        type: 'cat',
        values: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      },
      day: {
        type: 'cat'
      },
      week: {
        type: 'cat',
        values: ['6', '5', '4', '3', '2', '1', '0']
      },
      time: {
        type: 'time'
      },
      date: {
        type: 'time'
      }
    };

    // 加工数据
    // 增加涨幅、跌幅
    // 添加所属月、周几、每个月的第几周
    data.forEach((obj) => {
      const date = new Date(obj['date']);
      const month = date.getMonth();
      obj.month = month;
      obj.day = date.getDay();
      obj.week = this.getMonthWeek(date).toString();
    }); // 对数据进行排序

    const dv = new DataView();
    dv.source(data).transform({
      type: 'sort-by',
      fields: ['day'],
      order: 'DESC'
    });

    return (
      <div className="heat-chart-wrap">
        <p>活跃度</p>
        <Chart
          data={dv}
          scale={cols}
          forceFit
          // padding={[20, 120, 50, 120]}
          onGetG2Instance={(chart) => {
            console.log('onGetG2Instance');
            console.log(chart);
            setTimeout(() => {
              const geom = chart.get('geoms');
              console.log('onGetG2Instance1');
              console.log(geom);
              // geom.setSelected(data[1]);
            }, 10);
          }}
        >
          {/* <Legend name="涨跌幅" offset={0} /> */}
          <Tooltip 
            title="date"
          />
          <Axis name="day" visible={false} />
          <Axis name="week" visible={false} />
          <Axis name="date" visible={false} />
          <Facet
            type="list"
            fields={['month']}
            cols={1}
            // padding={[0, 15, 30, 15]}
            colTitle={{
              offsetY: -10,
              style: {
                fontSize: 12,
                textAlign: 'center',
                fill: '#666'
              }
            }}
          >
            <View>
              <Geom
                type="polygon"
                position="day*week*date"
                style={['day*week*date', {
                  lineWidth: 3,
                  stroke:(day, week, date)=>{
                    if(date === '2020-02-21') return '#ff0000';
                    return '#fff';
                  }
                 }]}
                color={['date', '#e1e1e1-#e3e3e3-#e5e5e5-#e7e7e7-#e9e9e9-#ebebeb-#ededed']}
                select={false}
                active={false}
                tooltip={['date*activityLevel', (date, activityLevel) => {
                  return {
                    //自定义 tooltip 上显示的 title 显示内容等。
                    name: '活跃度',
                    title: date,
                    value: activityLevel
                  };
                }]}
              >
                <Label
                  content="activityLevel"
                  offset={-3}
                  textStyle={{
                    rotate: 0,
                    textAlign: 'center',
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)'
                  }}
                />
              </Geom>
            </View>
          </Facet>
        </Chart>
      </div>
    );
  }
}