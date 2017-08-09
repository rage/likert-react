import 'wicg-focus-ring';
import LikertScale from './index';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [{ question: 'question' }, { question: 'second question' }, { question: 'third question' }];
  const onClick= (q, n) => console.info('q: ' + q + ' answer: ' + n);
  render(
    <LikertScale
      reviews={reviews}
      onClick={onClick}
      separatorType="dotted-line"
    />, root)
});
