import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

export default class Date extends React.Component {
  render() {
    let date = this.props.date;
    let isCurrent = date.month() === this.props.month;

    let classes = classnames('sd-date', {
      'current': date.month() === this.props.month,
      'future': date.month() > this.props.month,
      'past': date.month() < this.props.month
    });

    return <div className={classes} key={date} onClick={this.props.updateDate.bind(this, date)}>{date.date()}</div>
  }
}