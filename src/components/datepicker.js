const React = require('react/addons');
const moment = require('moment');
const _ = require('lodash');

const {CSSTransitionGroup} = React.addons;

import Calendar from './calendar';

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
    let firstDate = moment([year, month]).weekday(0);

    let dates = _.range(42).map((val, index) => {
      return firstDate.clone().add(index, 'd');
    });

    return dates;
  }

  _updateMonth(month) {
    let year = this.state.year;

    if (month >= 12) {
      year++;
      month %= 12;
    } else if (month < 0) {
      year--;
      month = 12 + month;
    }

    this.setState({
      month,
      year,
      dates: this._getDates(month, year)
    });
  }

  _updateDate(date) {
    this.setState({ date, open: false });
  }

  _updateYear(year) {
    this.setState({ year });
  }

  _open() {
    this.setState({ open: true });
  }

  render() {
    let calendar = this.state.open ? (
      <Calendar month={this.state.month}
        year={this.state.year}
        dates={this.state.dates}
        updateMonth={this._updateMonth.bind(this)}
        updateDate={this._updateDate.bind(this)}
        key="1" />
      ) : null;

    return (
      <div className="sd-datepicker">
        <input className="sd-input"
          type="text"
          value={this.state.date.format('MM/DD/YYYY')}
          readOnly
          onClick={this._open.bind(this)}/>


        <CSSTransitionGroup transitionName="calendar">
          {calendar}
        </CSSTransitionGroup>
      </div>
    );
  }
}