import { combineReducers } from 'redux';

export function getLocationReducer(action){
    navigator.geolocation.getCurrentPosition(getWeather);

    function getWeather(position){
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("long", position.coords.longitude);
        console.log(position)
    }
return 0;
}

export default combineReducers({
    location: getLocationReducer
});