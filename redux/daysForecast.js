import * as ActionTypes from './ActionTypes';

export const daysForecast = ( state = {
        errMess: null,
        isLoading: true,
        data: []
    }, action ) => {
        switch(action.type) {
            case ActionTypes.ADD_DAYSFORECAST:
                return {...state, isLoading: false, errMess: null, data: action.payload};
            case ActionTypes.DAYSFORECAST_FAILED:
                return {...state, isLoading: false, errMess: action.payload, data: []};
            case ActionTypes.DAYSFORECAST_LOADING:
                return {...state, isLoading: true, errMess: null, data: []};
            default:
                return state;
        }

}