import React from 'react';
import prefixer from 'utils/class-name-prefixer';
import ReviewScale from 'review-scale';
import styles from './styles.scss';

export default ({ showErrors, reviews, onClick, separatorType, icons }) => {
  const lineClassName = separatorType === 'dotted-line' ?  styles['dotted-line'] : separatorType === 'striped' ? '' : styles['full-line'];
  const container = separatorType === 'striped' ? styles['container-striped'] : styles.container;
  return (
    <div>
        {
          reviews.map(
          questionValue => (
              <div aria-required key={questionValue.question} className={container}>
                <div className={styles.question}>{questionValue.question}</div>
                <div className={lineClassName}/>
                <ReviewScale answer={questionValue.review} question={questionValue.question} onClick={onClick} icons={icons}/>
              </div>
          ))
        }
    </div>
  );
}
