import React from 'react';
import './tabs.css';
import propType from 'prop-types';

export default class Tabs extends React.PureComponent {
	constructor(props) {
		super(props);
		const activeKey = props.activeKey || props.defaultActiveKey || this.getDefaultActiveKey();
		this.state = {
			activeKey
		}
	}

	getDefaultActiveKey() {
		let activeKey;
		React.children.forEach(this.props.children, (child) => {
			const { key } = child;
			if(!activeKey) {
				activeKey = key;
			}
		});
		return activeKey;
	}

	static defaultProps = {

	}
	
	static propTypes = {
		
	}

	render() {
	  const {defaultActiveKey, activeKey, onChange, animated, children} = this.props;
		return (
			<div className="tabs">
				 
			</div>
		);
	}

	handleTabClick = (activeKey, e) => {
		const { onTabClick } = this.props;
		if(onTabClick) {
			onTabClick(activeKey, e);
		}
	}
}

export class TabPane extends React.PureComponent {

}