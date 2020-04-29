import React from 'react';
import './CalculatorButton.css';

export default class CalculatorButton extends React.Component {
    render() {
        return (
        <button className="calcActionButton" onClick={() => { this.props.onClicked(this.props.name); }}>{this.props.name}</button>
        )
    }
}