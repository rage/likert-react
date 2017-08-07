import React from 'react';
import MdSentimentVeryDissatisfied from 'react-icons/lib/md/sentiment-very-dissatisfied';
import MdSentimentDissatisfied from 'react-icons/lib/md/sentiment-dissatisfied';
import MdSentimentNeutral from 'react-icons/lib/md/sentiment-neutral';
import MdSentimentSatisfied from 'react-icons/lib/md/sentiment-satisfied';
import MdSentimentVerySatisfied from 'react-icons/lib/md/sentiment-very-satisfied';

export default ({ question, answer, onClick }) =>
  <div
    className={prefixer('scale')}
    role="radiogroup"
    aria-label={`${question}`}
    tabIndex="0"
  >
    <SentimentWrapper
      question={question}
      answer={answer}
      onClick={onClick}
    >
      <MdSentimentVeryDissatisfied />
      <MdSentimentDissatisfied />
      <MdSentimentNeutral />
      <MdSentimentSatisfied />
      <MdSentimentVerySatisfied />
    </SentimentWrapper>
  </div>
