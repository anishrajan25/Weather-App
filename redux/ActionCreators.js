import * as ActionTypes from './ActionTypes';

// Add Days forecast
export const fetchDaysForecast = (dispatch) => {

    dispatch(daysForecastLoading());

    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20&appid=ba4c76b07e91ec15fad3e632e9d09a1f`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var err = new Error(error.message);
        throw err;
    })
    .then( data => dispatch(addDaysForecast(data)))
    .catch( error => dispatch(daysForecastFailed(error.message)));
}

export const daysForecastLoading = () => ({
    type: ActionTypes.DAYSFORECAST_LOADING
})

export const addDaysForecast = (data) => ({
    payload: data,
    type: ActionTypes.DAYSFORECAST_LOADING
})

export const daysForecastFailed = (errmess) => ({
    payload: errmess,
    type: ActionTypes.DAYSFORECAST_LOADING
})