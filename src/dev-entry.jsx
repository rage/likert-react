import LikertScale from './index';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [{ question: 'question' }, { question: 'second question' }, { question: 'third question' }];
  const onClick= (q, n) => console.info('q: ' + q + ' anser: ' + n);
  render(<LikertScale reviews={reviews} onClick={onClick}/>, root)
});
