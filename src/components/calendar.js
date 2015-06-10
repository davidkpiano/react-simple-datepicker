import React from 'react/addons';
import moment from 'moment';

import Header from '../header/component';
import Month from '../month/component';

const {CSSTransitionGroup} = React.addons;

export default class Calendar extends React.Component {
  render() {
    return (
      <section className="sd-calendar">
        <Header {...this.props} />
        <CSSTransitionGroup transitionName="month">
          <Month {...this.props} key={this.props.month}/>
        </CSSTransitionGroup>
      </section>
    )
  }
}