export default class ControlsView {
    constructor() {
        this.controllerOnAdd = null;
        this.controllerOnMin = null;
        this.controllerOnMul = null;
        this.controllerOnDiv = null;
        this.controllerOnPow = null;
        this.controllerOnBin = null;
        this.controllerOnDec = null;
        document.querySelector("#control-buttons").addEventListener('click', (event) => this.onClick(event));
    }

    onClick(event) {
        document.getElementById("error-message").hidden = true;
        const targerId = event.target.id;

        if (targerId == 'add-numbers') {
            const number1 = this.checkNumberOne();
            const number2 = this.checkNumberTwo();
            if (number1["error"] || number2["error"]) return;
            this.controllerOnAdd(number1["number"], number2["number"]);
        }
        if (targerId == 'minus-numbers') {
            const number1 = this.checkNumberOne();
            const number2 = this.checkNumberTwo();
            if (number1["error"] || number2["error"]) return;
            this.controllerOnMin(number1["number"], number2["number"]);
        }
        if (targerId == 'mult-numbers') {
            const number1 = this.checkNumberOne();
            const number2 = this.checkNumberTwo();
            if (number1["error"] || number2["error"]) return;
            this.controllerOnMul(number1["number"], number2["number"]);
        }
        if (targerId == "div-numbers") {
            const number1 = this.checkNumberOne();
            const number2 = this.checkNumberTwo();
            if (number1["error"] || number2["error"]) return;
            this.controllerOnDiv(number1["number"], number2["number"]);
        }
        if (targerId == 'pow-numbers') {
            const number1 = this.checkNumberOne();
            const number2 = this.checkNumberTwo();
            if (number1["error"] || number2["error"]) return;
            this.controllerOnPow(number1["number"], number2["number"]);
        }
        if (targerId == 'binary-number') {
            const number1 = this.checkNumberOne();
            if (number1["error"]) return;
            this.controllerOnBin(number1["number"]);
        }
        if (targerId == 'dec-number') {
            const number1 = this.checkNumberOne();
            if (number1["error"]) return;
            this.controllerOnDec(number1["number"]);
        }
    }

    setOnAddCallback(addCallback) {
        this.controllerOnAdd = addCallback;
    }

    setOnMinusCallback(minCallback) {
        this.controllerOnMin = minCallback;
    }

    setOnDivCallback(divCallback) {
        this.controllerOnDiv = divCallback;
    }

    setOnPowCallback(powCallback) {
        this.controllerOnPow = powCallback;
    }

    setOnMulCallback(mulCallback) {
        this.controllerOnMul = mulCallback;
    }

    setOnBinCallback(binCallback) {
        this.controllerOnBin = binCallback;
    }

    setOnDecCallback(decCallback) {
        this.controllerOnDec = decCallback;
    }

    displayError = (messgae) => {
        this.onError(messgae);
    }

    checkNumberOne() {
        const inputNumberOne = document.getElementById("number-one");
        const number = Number(inputNumberOne.value);
        if (isNaN(number)) {
            this.onError("Number1 is invalid! Your input is " + inputNumberOne.value);
        }
        return {
            "number": number,
            "error": isNaN(number)
            }
    }

    checkNumberTwo() {
        const inputNumberTwo = document.getElementById("number-two");
        const number = Number(inputNumberTwo.value);
        if (isNaN(number)) {
            this.onError("Number2 is invalid! Your input is " + inputNumberTwo.value);
        }
        return {
            "number": number,
            "error": isNaN(number)
            }
    }
    
    onError(message) {
        console.log(document.getElementById("error-message"));
        document.getElementById("error-message").hidden = false;
        document.getElementById("error-message").innerHTML = message;
        console.log(document.getElementById("error-message"));
    }


}