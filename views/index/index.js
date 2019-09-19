import React from 'react';
import ReactDOM from 'react-dom';
import CarouselVertical from '../../components/carousel-vertical/carousel-vertical.jsx';
// import { Tabs } from 'antd';
// const { TabPane } = Tabs;
// import 'antd/dist/antd.css';
import './index.css';

const rootElement = document.getElementById('root');

class App extends React.Component {
  render() {
    return (
      <CarouselVertical />
    );
  }
}

ReactDOM.render(<App />, rootElement);
