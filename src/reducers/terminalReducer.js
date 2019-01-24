import initialState from './defaultsState/terminal.js';

var terminalReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);
    if (action.type === 'SET_OPERATORS') {
        newState.operators = action.payload.operators;
        return newState;
    }
    return state;
}
  
export default terminalReducer;