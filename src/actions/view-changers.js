import actions from '../constants/actions';
import flightTypes from '../constants/flight-types';

export default {
  showDepartures: {
    type: actions.changeView,
    flightType: flightTypes.departures
  },
  showArrivals: {
    type: actions.changeView,
    flightType: flightTypes.arrivals
  },
  showDelayed: {
    type: actions.changeView,
    flightType: flightTypes.delayed
  }
};