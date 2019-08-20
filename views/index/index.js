import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import 'antd/dist/antd.css';

// import { Button, Tabs, Radio} from 'antd';
import Radio from 'components/radio/radio.jsx';
// const {TabPane} = Tabs;



const rootElement = document.getElementById('root');

class App extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      // <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}></Radio>
        // <Radio value={2}>B</Radio>
        // <Radio value={3}>C</Radio>
        // <Radio value={4}>D</Radio>
      // </Radio.Group>
    );
  }
}

ReactDOM.render(<App />, rootElement);

// function callback(key) {
//   // alert(key);
// }
