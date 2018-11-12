import React, { Component } from 'react';
import './mode-selector.component.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions/view-changers';
import viewModes from '../../constants/viewModes';

class ModeSelector extends Component {
  constructor(opts) {
    super(opts);
    const { currentFlightBoard, showDepartures, showArrivals, showDelayed } = opts;
    this.currentFlightBoard = currentFlightBoard;
    this.showDepartures = showDepartures;
    this.showArrivals = showArrivals;
    this.showDelayed = showDelayed;
  }

  _getDeparturesLink() {
    if (this.props.currentFlightBoard === viewModes.departures) {
      return(<p class="selected">{viewModes.departures}</p>)
    } else {      
      return(<a onClick={this.showDepartures}>{viewModes.departures}</a>)
    }
  }

  _getArrivalsLink() {
    if (this.props.currentFlightBoard === viewModes.arrivals) {
      return(<p class="selected">{viewModes.arrivals}</p>)
    } else {
      return(<a onClick={this.showArrivals}>{viewModes.arrivals}</a>)
    }
  }

  _getDelayedLink() {
    if (this.props.currentFlightBoard === viewModes.delayed) {
      return(<p class="selected">{viewModes.delayed}</p>)
    } else {
      return(<a onClick={this.showDelayed}>{viewModes.delayed}</a>)
    }
  }

  render() {
    return (
      <div class="view-modes">
        <div class="view-mode">
          {this._getDeparturesLink()}
        </div>
        <div class="view-mode">
          {this._getArrivalsLink()}
        </div>
        <div class="view-mode">
        {this._getDelayedLink()}
        </div>
      </div>
    );
  }
}

ModeSelector.propTypes = {
  currentFlightBoard: PropTypes.string.isRequired,
  showDepartures: PropTypes.func.isRequired,
  showArrivals: PropTypes.func.isRequired,
  showDelayed: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    currentFlightBoard: state.currentFlightBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showDepartures: () => {
      dispatch(actions.showDepartures)
    },
    showArrivals: () => {
      dispatch(actions.showArrivals)
    },
    showDelayed: () => {
      dispatch(actions.showDelayed)
    }
  };
};

const VisibleModeSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSelector);

export default VisibleModeSelector;