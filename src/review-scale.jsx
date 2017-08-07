import React from 'react';
import MdSentimentVeryDissatisfied from 'react-icons/lib/md/sentiment-very-dissatisfied';
import MdSentimentDissatisfied from 'react-icons/lib/md/sentiment-dissatisfied';
import MdSentimentNeutral from 'react-icons/lib/md/sentiment-neutral';
import MdSentimentSatisfied from 'react-icons/lib/md/sentiment-satisfied';
import MdSentimentVerySatisfied from 'react-icons/lib/md/sentiment-very-satisfied';
import prefixer from 'utils/class-name-prefixer';
import SentimentWrapper from 'sentiment-wrapper';

export default ({ question, answer, onClick }) =>
  <div
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
