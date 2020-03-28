export default class HistoryView {
    constructor(historyModel) {
        this.historyModel = historyModel;
    }

    toHtml() {
        return `
            <p>${this.historyModel.number1} ${this.historyModel.operation} ${this.historyModel.number2} = ${this.historyModel.result}</p>
        `;
    }

}