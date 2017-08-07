import React from 'react';
import prefixer from 'utils/class-name-prefixer';
import ReviewScale from './review-scale';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  margin: 0.2rem 0;
`

const ScaleLine = styled.div`
  background-color: #a9a9c1;
  height: 0.11rem;
  border-radius: 0.2rem;
  flex-grow: 2;
`

const Question = styled.div`
  margin: 0 0.4rem 0 0;
  max-width: 60%;
`

export default ({ showErrors, reviews, onClick }) => (
  <div>
    <div>
      {
        reviews.map(
        questionValue => (
          <div key={questionValue.question} className={prefixer('review-question-scale-error-container')}>
            <Container aria-required key={questionValue.question}>
              <Question className={prefixer('peer-review-question')}>{questionValue.question}
              </Question>
              <ScaleLine />
              <ReviewScale answer={questionValue.review} question={questionValue.question} onClick={onClick}/>
            </Container>
          </div>
        ))
      }
    </div>
  </div>
);
