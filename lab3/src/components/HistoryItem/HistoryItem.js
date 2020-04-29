import React from 'react';
import './HistoryItem.css';

export default class HistoryItem extends React.Component {

    render() {
        let style = "success-statement";
        if (this.props.wrong) {
            style = "wrong-statement";
        }

        return (
            <div className={style}>
                {this.props.historyString}
            </div>
        );
    }

};