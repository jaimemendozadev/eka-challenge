import {combineReducers} from 'redux';
import Form1Reducer from './Form1Reducer.js';

const rootReducer = combineReducers({
  form1: Form1Reducer
});

export default rootReducer;
