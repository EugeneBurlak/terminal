import { combineReducers } from 'redux';
import appReducer from './appReducer';
import terminalReducer from './terminalReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	appReducer,
	terminalReducer
});