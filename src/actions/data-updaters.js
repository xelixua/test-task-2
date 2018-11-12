import actions from '../constants/actions';
import flightTypes from '../constants/flight-types';

export default {
    getDepartures: {
      type: actions.getFlights,
      flightType: flightTypes.departures
    },
    getArrivals: {
      type: actions.getFlights,
      flightType: flightTypes.arrivals
    },
    getDelayed: {
      type: actions.getFlights,
      flightType: flightTypes.delayed
    }
};

