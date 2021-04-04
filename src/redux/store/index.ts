import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers from '../reducers';

const store = createStore(appReducers, composeWithDevTools());

export default store;
