onmessage = function(message) {
    const number1 = message.data["number1"];
    const number2 = message.data["number2"];
    const operation = message.data["operation"];

    if (operation == '+') {
        this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": number1 + number2, "error": undefined});
    }
    if (operation == '-') {
        this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": number1 - number2, "error": undefined});
    }
    if (operation == '*') {
        this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": number1 * number2, "error": undefined});
    }
    if (operation == '^') {
        this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": Math.pow(number1,number2), "error": undefined});
    }
    if (operation == "/") {
        if (number2 == 0) {
            this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": undefined, "error": "Cannot div by 0"});
        } else {
            this.postMessage({"number1": number1, "number2": number2, "operation": operation, "result": number1 / number2, "error": undefined});
        }
    }
    if (operation == 'B') {
        this.postMessage({"number1": number1, "number2": "", "operation": operation, "result": (number1).toString(2), "error": undefined});
    }
    if (operation == 'D') {
        this.postMessage({"number1": number1, "number2": "", "operation": operation, "result": parseInt(number1, 2), "error": undefined});
    }
}

// export { OPERATION_PLUS, OPERATION_MINUS, OPERATION_DIV, OPERATION_POW, OPERATION_MUL, OPERATION_BIN };