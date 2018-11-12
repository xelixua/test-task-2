import React, { Component } from 'react';
import './flight.component.css';
import moment from 'moment';

export default class Flight extends Component {
  _getFlightTime() {
    return moment(this.props.flight.arrival || this.props.flight.departure).format('HH:mm');
  }

  _getDirection() {
    const titleArr = this.props.flight.thread.title.split('—')
    if (titleArr.length > 1) {
      return titleArr[1].trim()
    }

    return this.props.flight.thread.title
  }

  _getFlightTag() {
    return this.props.flight.thread.number;
  }

  _getTerminal() {
    return this.props.flight.terminal || ''
  }

  _getStatus() {
    return this.props.flight.status;
  }

  render() {
    return (
      <div class="flight-block">
        <table>
          <tbody>
            <tr>
              <td class="fligh-field">
                { this._getFlightTime() }
              </td>

              <td class="fligh-field direction">
                { this._getDirection() }
              </td>

              <td class="fligh-field">
                { this._getFlightTag() }
              </td>

              <td class="fligh-field">
                { this._getTerminal() }
              </td>

              <td class="fligh-field">
                { this._getStatus() }
              </td>
            </tr>
          </tbody>          
        </table>
      </div>
    )
  }
}
