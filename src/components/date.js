import React from 'react';
import classnames from 'classnames';

export default class CalendarDate extends React.Component {
  render() {
    let date = this.props.date;

    let classes = classnames('sd-date', {
      'current': date.month() === this.props.month,
      'future': date.month() > this.props.month,
      'past': date.month() < this.props.month
    });

    return (
      <div
        className={classes}
        key={date}
        onClick={this.props.updateDate.bind(this, date)}>
        {date.date()}
      </div>
    );
  }
}