import React from 'react';
import ReactDOM from 'react-dom';
// import Tabs from 'components/Tabs/Tabs.jsx';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import 'antd/dist/antd.css';

const rootElement = document.getElementById('root');

class App extends React.Component {
  change() {
    console.log('tab clicked');
  }

  render() {
    return (
      <Tabs
        defaultActiveKey="1"
        onChange={this.change}
        activeKey="1"
        animated="top/bottom"
      >
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

ReactDOM.render(<App />, rootElement);
