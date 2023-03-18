import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
