import {combineReducers} from 'redux';

const counter = (state=0,action) => {
    //Check the type of action, if the condition is met increment the state by the value passed.
    if(action.type === 'INCREMENT'){
        return state+action.inc;
    }
    //return the current value
    return state;
}

const myReducers = combineReducers({counter});
export default myReducers;