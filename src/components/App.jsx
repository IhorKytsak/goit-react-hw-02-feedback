import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import { sectionTitles } from 'constants';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;

    //Interesting alternatyve way ;)

    // const total = Object.values(this.state).reduce((acc, currentValue) => {
    //   return acc + currentValue;
    // }, 0);

    // return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={sectionTitles.feedback}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackHandler}
          />
        </Section>

        <Section title={sectionTitles.statistics}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
