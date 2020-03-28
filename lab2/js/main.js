import ControlsView from './view/ControlsView.js';
import HistoryListModel from './models/HistoryListModel.js';
import Controller from './contollers/Controller.js';
import HistoryListView from './view/HistoryListView.js';

const historyListModel = new HistoryListModel();
const historyListView = new HistoryListView(historyListModel);
const controlView = new ControlsView();

const controller = new Controller(controlView, historyListView, historyListModel);