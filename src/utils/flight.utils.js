import moment from 'moment';
import flightStatuses from './../constants/flight-statuses';
/* да, я знаю, что это - чушь. Но это только тестовое задание*/
function detectStatus(departure, arrival) {
  //departure
  if (departure) {      
    return _detectDepartureStatus(departure)
  }

  return _detectArrivalStatus(arrival)
}

function _detectDepartureStatus(departure) {
  if (Math.random() > 0.7) {
    return flightStatuses.delayed;
  }

  const hoursBefore = moment().hours() - moment(departure).hours()

  if (hoursBefore < 0) {
    return flightStatuses.departed;
  }

  if (hoursBefore < 1) {
    return flightStatuses.boarding;
  }

  if (hoursBefore < 3) {
    return flightStatuses.checkIn;
  }

  return ''
}

function _detectArrivalStatus(arrival) {
  if (Math.random > 0.7) {
    return flightStatuses.delayed;
  }

  const hoursBefore = moment().hours() - moment(arrival).hours()
  if (hoursBefore < 0) {
    return flightStatuses.landed;
  }

  return ''
}

export {
  detectStatus
}