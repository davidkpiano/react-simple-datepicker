const React = require('react');
const moment = require('moment');
const _ = require('lodash');
const classnames = require('classnames');

class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    let date = moment();
    let month = date.month();
    let year = date.year();

    this.state = {
      month,
      year,
      date,
      dates: this._getDates(month, year)
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
    this.setState({ date });
  }

  render() {
    return (
      <div className="sd-datepicker">
        <input className="sd-input" type="text" value={this.state.date.format('MM/DD/YYYY')} readOnly/>
        <Calendar month={this.state.month}
          year={this.state.year}
          dates={this.state.dates}
          updateMonth={this._updateMonth.bind(this)}
          updateDate={this._updateDate.bind(this)} />
      </div>
    );
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <section className="sd-calendar">
        <header className="sd-header">
          <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month - 1)}>Prev</button>
            <h3 className="sd-heading">{moment().month(this.props.month).format('MMMM')} {this.props.year}</h3>
          <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month + 1)}>Next</button>
        </header>

        <Month {...this.props} />
      </section>
    )
  }
}

class Month extends React.Component {
  render() {
    return (
      <section className="sd-month">
        <div className="sd-week">
          {this.props.dates.map((date) => {
            let isCurrent = date.month() === this.props.month;

            let classes = classnames('sd-date', {
              'current': date.month() === this.props.month,
              'future': date.month() > this.props.month,
              'past': date.month() < this.props.month
            });

            return <div className={classes} key={date} onClick={this.props.updateDate.bind(this, date)}>{date.date()}</div>
          })}
        </div>
      </section>
    )
  }
}

React.render(<Datepicker month="November"/>, document.getElementById('foo'))