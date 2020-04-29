import React from 'react';
import './CalculatorConsole.css';

export default class CalculatorConsole extends React.Component {

    render() {
        return (
        <p className="console">{this.props.value}</p>
        );
    }
}