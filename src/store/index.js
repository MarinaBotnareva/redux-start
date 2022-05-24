import { legacy_createStore as createStore, combineReducers } from 'redux';
import { counterReducer } from './reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(globalReducer);
