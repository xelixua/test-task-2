import flightTypes from '../constants/flight-types';
import { detectStatus } from '../utils/flight.utils';
import flightStatuses from '../constants/flight-statuses';
import actions from '../constants/actions';

import departuresData from '../data/departures';
import arrivalsData from '../data/arrivals';

function reducer (flights = {}, action) {
  const updatedFlights = {
    ...flights
  };
  if (action.type === actions.getFlights) {
    switch (action.flightType) {
      case flightTypes.arrivals:
        updatedFlights.arrivals = _getArrivalsReducer();
        break;
      case flightTypes.delayed:
        updatedFlights.delayed = _getDelayedReducer();
        break;
      default:
      updatedFlights.departures = _getDeparturesReducer();
        break;
    }
  }

  return updatedFlights;
}

function _getDeparturesReducer() {
  const departures = departuresData.schedule;
  return departures;
}

function _getArrivalsReducer() {
  const arrivals = arrivalsData.schedule;
  return arrivals;
}

function _getDelayedReducer() {
  const delayed = departuresData.schedule
      .map(flight => {
        flight.status = detectStatus(flight.departure)
        return flight
      })
      .filter(flight => flight.status === flightStatuses.delayed)
    .concat(arrivalsData.schedule
      .map(flight => {
        flight.status = detectStatus(null, flight.arrival)
        return flight
      })
      .filter(flight => flight.status === flightStatuses.delayed));
  return delayed;
}

export default reducer;