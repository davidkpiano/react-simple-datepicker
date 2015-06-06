import React from 'react';
import moment from 'moment';

import Month from '../month/component';

export default class Calendar extends React.Component {
  render() {
    return (
      <section className="sd-calendar">
        <header className="sd-header">
          <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month - 1)}>&laquo;</button>
            <h3 className="sd-heading">{moment().month(this.props.month).format('MMMM')} {this.props.year}</h3>
          <button className="sd-button" onClick={this.props.updateMonth.bind(this, this.props.month + 1)}>&raquo;</button>
        </header>

        <Month {...this.props} />
      </section>
    )
  }
}