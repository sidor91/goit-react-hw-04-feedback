import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, increaseGood] = useState(0);
  const [neutral, increaseNeutral] = useState(0);
  const [bad, increaseBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = e => {
    const targetOption = e.target.name;

    switch (targetOption) {
      case 'good':
        increaseGood(good + 1);
        break;
      case 'neutral':
        increaseNeutral(neutral + 1);
        break;
      case 'bad':
        increaseBad(bad + 1);
        break;
      default: return 0;
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {good + neutral + bad > 0 ? (
        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
