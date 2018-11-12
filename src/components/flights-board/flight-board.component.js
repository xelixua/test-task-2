import React, { Component } from 'react';
import Flight from '../flight/flight.component';
import './flight-board.component.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import viewModes from '../../constants/viewModes';
import actions from '../../actions/data-updaters';

class FlightBoard extends Component {
  constructor(opts) {
    super(opts);
    const { getDepartures, getArrivals, getDelayed } = opts;

    this.getDepartures = getDepartures;
    this.getArrivals = getArrivals;
    this.getDelayed = getDelayed;
    this._init();
  }

  _init() {
    setInterval(() => {
      this.getDepartures();
      this.getArrivals();
      this.getDelayed();
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.props.flights.map((flight, index) => (
        <Flight key={index} flight={flight}></Flight>
      ))}
      </div>
    )
  }
}

FlightBoard.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object),
  getDepartures: PropTypes.func.isRequired,
  getArrivals: PropTypes.func.isRequired,
  getDelayed: PropTypes.func.isRequired
};

const getCurrentFlights = (flights, currentFlightBoard) => {
  switch (currentFlightBoard) {
    case viewModes.arrivals:
      return flights.arrivals;
    case viewModes.delayed:
      return flights.delayed;
    default:
      return flights.departures;
  }
};

const mapStateToProps = state => {
  return {
    flights: getCurrentFlights(state.flights, state.currentFlightBoard),
    currentFlightBoard: state.currentFlightBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDepartures: () => {
      dispatch(actions.getDepartures)
    },
    getArrivals: () => {
      dispatch(actions.getArrivals)
    },
    getDelayed: () => {
      dispatch(actions.getDelayed)
    }
  };
};

const VisibleFlightBoard = connect(mapStateToProps, mapDispatchToProps)(FlightBoard);
export default VisibleFlightBoard;