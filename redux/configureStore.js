import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { daysForecast } from './daysForecast';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            daysForecast
        }),
        applyMiddleware(thunk)
    );

    return store;
}