import {createStore} from 'redux';
import {historyReducer} from './reducers/history';

export const store = createStore(historyReducer);
