import { configureStore } from 'redux';
import { counterReducer } from './reducer';

export const store = configureStore({
    counter: counterReducer,
});
