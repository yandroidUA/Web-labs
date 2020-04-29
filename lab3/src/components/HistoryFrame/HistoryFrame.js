import React from 'react';
import './HistoryFrame.css';
import HistoryItem from '../HistoryItem/HistoryItem';

export default class HistoryFrame extends React.Component {

    render() {
        const items = this.props.history.map((item, key) => {
            return <HistoryItem key={key} historyString={item.string} wrong={item.wrong} />
        });
        return(
            <div className="historyFrame">
                {items}
            </div>
        );
    }

};