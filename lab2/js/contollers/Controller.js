import HistoryModel from '../models/HistoryModel.js';

const OPERATION_PLUS = '+';
const OPERATION_MINUS = '-';
const OPERATION_DIV = '/';
const OPERATION_POW = '^';
const OPERATION_MUL = '*';
const OPERATION_BIN = 'B';
const OPERATION_DEC = 'D';

export default class Controller {
    constructor(controlsView, historyListView, historyListModel) {
        this.controlsView = controlsView;
        this.historyListView = historyListView;
        this.historyListModel = historyListModel;
        this.worker = new Worker("js/contollers/workers/OperationWorker.js", { type: "module" });
        historyListModel.setOnAddItemCallback(this.notifyDataSetChanged);
        controlsView.setOnAddCallback(this.onAddItem);
        controlsView.setOnMinusCallback(this.onMinusItem);
        controlsView.setOnDivCallback(this.onDivItem);
        controlsView.setOnPowCallback(this.onPowItem);
        controlsView.setOnMulCallback(this.onMultItem);
        controlsView.setOnBinCallback(this.onBin);
        controlsView.setOnDecCallback(this.onDec);
        this.worker.onmessage = this.onMessageRecieved;
    }

    onMessageRecieved = (message) => {
        console.log(message.data);
        if (message.data["error"] == undefined) {
            this.historyListModel.addItem(
                new HistoryModel(
                    message.data["number1"], 
                    message.data["number2"],
                    message.data["operation"],
                    message.data["result"]
                    )
                );
        } else {
            this.controlsView.displayError(message.data["error"]);
        }
    }

    onAddItem = (number1, number2) => {
        this.worker.postMessage({"number1": number1, "number2": number2, "operation": OPERATION_PLUS});
    }

    onMinusItem = (number1, number2) => {
        this.worker.postMessage({"number1": number1, "number2": number2, "operation": OPERATION_MINUS});
    }

    onMultItem = (number1, number2) => {
        this.worker.postMessage({"number1": number1, "number2": number2, "operation": OPERATION_MUL});
    }

    onDivItem = (number1, number2) => {
        this.worker.postMessage({"number1": number1, "number2": number2, "operation": OPERATION_DIV});
    }

    onPowItem = (number1, number2) => {
        this.worker.postMessage({"number1": number1, "number2": number2, "operation": OPERATION_POW});
    }

    onBin = (number1) => {
        this.worker.postMessage({"number1": number1, "number2": "", "operation": OPERATION_BIN});
    }

    onDec = (number1) => {
        this.worker.postMessage({"number1": number1, "number2": "", "operation": OPERATION_DEC});
    }

    notifyDataSetChanged = () => {
        document.querySelector("#history").innerHTML = this.historyListView.toHtml();
    }

}