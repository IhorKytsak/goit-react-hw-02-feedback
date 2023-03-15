import { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map(option => {
          return (
            <Button
              key={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
