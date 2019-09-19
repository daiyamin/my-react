import React from 'react';
import Child from 'components/child/Child.jsx';
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James',
      detail: {
        sex: 'male',
        age: 12
      }
    }
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        detail: prevState.age + 1
      }
    });
  }
  render() {
    console.log('parent render');
    const {detail} = this.state;
    return (
      <div>
        <input type="button" onClick={this.handleClick}/>
        <div>{detail.age}</div>
        <Child name={this.state.name} detail={detail}/>
      </div>
    );
  }
}