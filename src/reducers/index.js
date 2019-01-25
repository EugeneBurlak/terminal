import { combineReducers } from 'redux';
import terminalReducer from './terminalReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	terminalReducer
});