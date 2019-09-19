import React from 'react';
import './radio.css';
import propType from 'prop-types';

export default class Radio extends React.Component {
  static defaultProps = {
    children: '默认文案'
  };

  static propTypes = {
     children: propType.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    
  }

  handleClick(...rest) {
    console.log(rest);
    // console.log(e);
    // this.setState((state) => {
    //   checked: !state.checked
    // });
  }

  render() {
    return (
      <label className="ant-radio-wrapper">
        <span className={`ant-radio ${this.state.checked ? 'ant-radio-checked' : ''}`}
            onClick={(e) => this.handleClick(e, 123)}
        >
          <input className="ant-radio-input"
              type="radio"
              value="2"
          />
          <span className="ant-radio-inner"></span>
        </span>
        <span>{this.props.children}</span>
      </label>
    );
  }

}