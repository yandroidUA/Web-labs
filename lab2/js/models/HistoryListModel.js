export default class HistoryListModel {
    constructor() {
        this.items = [];
        this.onAddItemCallback = null;
    }

    setOnAddItemCallback(onAddItemCallback) {
        this.onAddItemCallback = onAddItemCallback;
    }

    addItem(item) {
        this.items.push(item);
        this.onAddItemCallback();
    }

}