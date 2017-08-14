import 'wicg-focus-ring';
import LikertScale from './index';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [{ question: 'Code is readable' }, { question: 'Tests are comprehensive' }, { question: 'Webpack is configured well' }];
  const onClick= (q, n) => console.info('q: ' + q + ' answer: ' + n);
  render(
    <LikertScale
      reviews={reviews}
      onClick={onClick}
      separatorType="striped"
    />, root)
});
