import flightTypes from '../constants/flight-types';
import actions from '../constants/actions';
import viewModes from '../constants/viewModes';

function reducer (view = _showDepartures(), action) {
  if (action.type === actions.changeView) {
    let updatedView = _showDepartures();
    switch (action.flightType) {
      case flightTypes.arrivals:
      updatedView = _showArrivals();
        break;
      case flightTypes.delayed:
      updatedView = _showDelayed();
        break;
    }

    return updatedView;
  }

  return view;
}

function _showDepartures() {
  return viewModes.departures;
}

function _showArrivals() {
  return viewModes.arrivals;
}

function _showDelayed() {
  return viewModes.delayed;
}

export default reducer;


