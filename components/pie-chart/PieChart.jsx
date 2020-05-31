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

export default class PieChart extends React.Component {
  render() {
    const data = [
      {
        item: 'tag1',
        count: 40,
        percent: 40
      },
      {
        item: 'tag2',
        count: 21,
        percent: 21
      },
      {
        item: 'tag3',
        count: 17,
        percent: 17
      },
      {
        item: 'tag4',
        count: 13,
        percent: 13
      },
      {
        item: 'tag5',
        count: 9,
        percent: 9
      }
    ];
    const cols = {
      percent: {
        formatter: val => {
          val = val + '%';
          return val;
        }
      }
    };
    return (
      <div>
        <Chart
          forceFit
          data={data}
          scale={cols}
        >
          <Coord type="theta" radius={0.75} innerRadius={0.5}/>
          <Axis name="percent"/>
          <Legend
            name="item"
            position="right"
            offsetY={-150}
            offsetX={-window.innerWidth / 2 + 240}
            clickable={false}
          />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>'
          />
          <Guide>
            <Guide.Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>报警总数<br><span style=&quot;color:#262626;font-size:2.5em&quot;>100</span></div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            select={false}
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = percent + '%';
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff'
            }}
          >
            <Label
              content="percent"
              offset={-40}
              textStyle={{
                rotate: 0,
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}