import React from 'react';
import CalculatorConsole from '../CalculatorConsole/CalculatorConsole.js';
import CalculatorButton from '../CalculatorButton/CalculatorButton.js';
import './CalculatorFrame.css';
import HistoryFrame from '../HistoryFrame/HistoryFrame.js';

export default class CallculatorFrame extends React.Component {

    state = {
        number1: "",
        number2: "",
        operation: undefined,
        error: undefined,
        history: []
    };

    constructor() {
        super();
        this.operations = {
            [OPERATION_ADD]: (a, b) => a + b,
            [OPERATION_MIN]: (a, b) => a - b,
            [OPERATION_MUL]: (a, b) => a * b,
            [OPERATION_DIV]: (a, b) => a / b,
            [OPEARTION_POW]: (a, b) => Math.pow(a, b)
        };
    }

    onNumberClicked = (num) => {
        if (this.state.operation === undefined) {
            // need to modify first number      
            this.setState(oldState => ({ 
                number1: oldState.number1 + num
            }));
        } else {
            // need to modify second number
            this.setState(oldState => ({ 
                number2: oldState.number2 + num
            }));
        }
    }

    calculateBin = (number) => {
        const num = Number(number);
        if (isNaN(num)) {
            console.log("ERROR! Number expected, but got " + num);
            return NaN;
        }

        return number.toString(2);
    }

    calculateOperation = (num1, num2, operation) => {
        const number1 = Number(num1);
        if (isNaN(number1)) return NaN;
        
        const number2 = Number(num2);
        if (isNaN(number2)) return NaN;

        if (operation === OPERATION_DIV && number2 === 0) {
            return NaN;
        }

        if (this.operations.hasOwnProperty(operation)) {
            return this.operations[operation](number1, number2);
        }

        console.log("ERROR! Operation " + operation + " dont found!");
        return NaN;
    }

    calculate = (unused) => {
        const number1 = this.state.number1;
        const number2 = this.state.number2;
        const operation = this.state.operation;
        let summary = "";
        let newHistory = this.state.history;

        if (operation === OPERATION_BIN) {
            summary = this.calculateBin(number1);
            newHistory.push({ 
                string: number1 + " BIN = " + summary,
                wrong: isNaN(summary)
            });
            this.setState(oldState => ({
                history: newHistory
            }));
        } else {
            summary = this.calculateOperation(number1, number2, operation);
            newHistory.push({ 
                string: number1 + " " + operation + " " + number2 + " = " + summary,
                wrong: isNaN(summary)
            });
            this.setState(oldState => ({
                history: newHistory
            }));
        }

        this.setState(oldState => ({ 
            number1: summary,
            number2: "",
            operation: undefined
        }));

    }

    onClearClicked = (unused) => {
        this.setState({
            number1: "",
            number2: "",
            operation: undefined
        })
    }

    onOperationClicked = (oper) => {
        if (this.state.operation !== undefined) {
            this.calculate('');
        }

        this.setState(oldState => ({
            operation: oper
        }));
    }

    render() {
        let consoleText = this.state.number1;

        if (this.state.operation !== undefined) {
            consoleText += " " + this.state.operation + " ";
        }

        consoleText += this.state.number2;
        console.log(this.state.history);
        return (
            <div>
                <div className="calculator-panel">
                    <CalculatorConsole value={consoleText}/>
                    <div>
                        <CalculatorButton name="0" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="1" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="2" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="3" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="4" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="5" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="6" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="7" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="8" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="9" onClicked={this.onNumberClicked}/>
                        <CalculatorButton name="." onClicked={this.onNumberClicked}/>
                    </div>
                    <div>
                        <CalculatorButton name={OPERATION_ADD} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={OPERATION_MIN} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={OPERATION_MUL} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={OPERATION_DIV} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={OPERATION_BIN} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={OPEARTION_POW} onClicked={this.onOperationClicked}/>
                        <CalculatorButton name={ACTION_CALC} onClicked={this.calculate}/>
                        <CalculatorButton name="CLEAR" onClicked={this.onClearClicked}/>
                    </div>
                </div>
                <HistoryFrame history={this.state.history}/>
            </div>
        );
    }

}

export const OPERATION_ADD = '+';
export const OPERATION_MIN = '-';
export const OPERATION_MUL = '*';
export const OPERATION_DIV = '/';
export const OPERATION_BIN = 'BIN';
export const OPEARTION_POW = "POW";
export const ACTION_CALC = '=';