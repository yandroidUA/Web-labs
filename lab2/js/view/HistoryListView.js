import HistoryView from './HistoryView.js';

export default class HistoryListView {
    constructor(historyListModel) {
        this.item = historyListModel;
    }

    toHtml = () => {
        const itemsHtml = this.item.items.map( (item) => {
            const itemView = new HistoryView(item);
            return itemView.toHtml();
        }).join("");
        return `<div>${itemsHtml}</div>`;
    }

}