import { legacy_createStore as createStore, combineReducers } from 'redux';
import { counterReducer } from './reducer';
import { tasksReducer } from './reducer/tasks.reducer';
import { userReducer } from './reducer/user.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    user: userReducer,
});

export const store = createStore(globalReducer);
