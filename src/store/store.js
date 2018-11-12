import flights from '../reducers/data-updaters';
import currentFlightBoard from '../reducers/view-changers';
import { combineReducers, createStore } from 'redux';
import flightTypes from '../constants/flight-types';
const reducer = combineReducers({ flights, currentFlightBoard });
const store = createStore(reducer, {
    flights: {
      departures: [],
      arrivals: [],
      delayed: []
    },
    currentFlightBoard: flightTypes.departures
});

export default store;