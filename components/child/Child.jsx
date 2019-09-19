import React from 'react';
export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jack'
    }
  }
  render() {
    console.log('child render');
    const { detail = {} } = this.props;
    return (
      <div className="child">
        <input type="button" onClick={this.handleClick}/>
        <p>{name}</p>
      </div>
    );
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        name: 'Jack1'
      }
    });
  }
}