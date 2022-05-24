import { legacy_createStore as createStore, combineReducers } from 'redux';
import { counterReducer } from './reducer';
import { tasksReducer } from './reducer/tasks.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer, // new reducer
});

export const store = createStore(globalReducer);
