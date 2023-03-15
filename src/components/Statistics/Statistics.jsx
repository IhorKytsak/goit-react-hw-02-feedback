import { Component } from 'react';
import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import { notificationMsg } from 'constants';

import { StatListItem } from './Statistics.styled';

const firstLetterToUpperCase = letter => {
  return letter.slice(0, 1).toUpperCase() + letter.slice(1);
};

class Statistics extends Component {
  render() {
    // const { good, neutral, bad, total, positivePercentage } = this.props;

    const listItems = Object.entries(this.props).map(([key, value], index) => (
      <StatListItem key={index}>
        {firstLetterToUpperCase(key)}: {value}
      </StatListItem>
    ));

    return (
      <>
        {this.props.total ? (
          <ul>
            {listItems}

            {/*Simplier alternative*/}

            {/* <StatListItem>Good: {good}</StatListItem>
            <StatListItem>Neutral: {neutral}</StatListItem>
            <StatListItem>Bad: {bad}</StatListItem>
            <StatListItem>Total: {total}</StatListItem>
            <StatListItem>
              Positive feedback: {positivePercentage}%
            </StatListItem> */}
          </ul>
        ) : (
          <Notification message={notificationMsg} />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
