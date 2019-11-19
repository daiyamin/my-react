import React from 'react';
// import propType from 'prop-types';

export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                '第一行',
                '第二行',
                '第三行'
            ]
        };
    }
    render() {
        const {dataList = []} = this.state;
        return (
            <ul>
                {
                    dataList.map((dataItem, i) => (
                        <li key={i}>{dataItem}</li>
                    ))
                }
            </ul>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    dataList: prevState.dataList.slice(1)
                }
            });
        }, 3000)
    }
}