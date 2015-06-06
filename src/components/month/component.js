import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

export default class Month extends React.Component {
  render() {
    return (
      <section className="sd-month">
        <ul className="sd-days">
          <li className="sd-day">Sun</li>
          <li className="sd-day">Mon</li>
          <li className="sd-day">Tue</li>
          <li className="sd-day">Wed</li>
          <li className="sd-day">Thu</li>
          <li className="sd-day">Fri</li>
          <li className="sd-day">Sat</li>
        </ul>
        {this.props.dates.map((date, i) => {
          let isCurrent = date.month() === this.props.month;

          let classes = classnames('sd-date', {
            'current': date.month() === this.props.month,
            'future': date.month() > this.props.month,
            'past': date.month() < this.props.month
          });

          return <div className={classes} key={date} onClick={this.props.updateDate.bind(this, date)}>{date.date()}</div>
        })}
      </section>
    )
  }
}