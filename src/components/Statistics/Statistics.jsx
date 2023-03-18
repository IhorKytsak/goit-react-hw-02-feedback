import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import { notificationMsg } from 'constants';

import { StatListItem } from './Statistics.styled';

const firstLetterToUpperCase = letter => {
  return letter.slice(0, 1).toUpperCase() + letter.slice(1);
};

const Statistics = props => {
  // const { good, neutral, bad, total, positivePercentage } = props;

  const listItems = Object.entries(props).map(([key, value], index) => {
    if (key === 'positivePercentage') {
      key = 'Positive feedback';
      value += '%';
    }

    return (
      <StatListItem key={index}>
        {firstLetterToUpperCase(key)}: {value}
      </StatListItem>
    );
  });

  return (
    <>
      {props.total ? (
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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
