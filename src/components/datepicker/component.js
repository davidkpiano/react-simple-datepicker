const React = require('react');
const moment = require('moment');
const _ = require('lodash');

import Calendar from '../calendar/component';

export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    let date = moment();
    let month = date.month();
    let year = date.year();

    this.state = {
      month,
      year,
      date,
      dates: this._getDates(month, year),
      open: false
    };
  }

  _getDates(month, year) {
    let dates = [];

    let firstDate = moment([year, month]).weekday(0);

    for (let i = 0; i < 7 * 5; i++) {
      let currentDate = firstDate.clone();
      currentDate.add(i, 'd');

      dates.push(currentDate);
    }

    return dates;
  }

  _updateMonth(month) {
    this.setState({ month, dates: this._getDates(month, this.state.year) });
  }

  _updateDate(date) {
    this.setState({ date, open: false });
  }

  _open() {
    this.setState({ open: true });
  }

  render() {
    let calendar = <Calendar month={this.state.month}
      year={this.state.year}
      dates={this.state.dates}
      updateMonth={this._updateMonth.bind(this)}
      updateDate={this._updateDate.bind(this)}/>;

    return (
      <div className="sd-datepicker">
        <input className="sd-input"
          type="text"
          value={this.state.date.format('MM/DD/YYYY')}
          readOnly
          onClick={this._open.bind(this)}/>

        {this.state.open && calendar}
      </div>
    );
  }
}