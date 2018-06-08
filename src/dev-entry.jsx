import 'wicg-focus-ring';
import LikertScale from './index';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [{ question: 'Code is readable' }, { question: 'Tests are comprehensive' }, { question: 'Webpack is configured well' }];
  const onClick= (q, n) => console.info('q: ' + q + ' answer: ' + n);

  const results = [
    { question: 'Code is readable', review: [1, 4, 5, 1, 3] },
    { question: 'Tests are comprehensive', review: [4, 2, 2, 1, 3] },
    { question: 'Webpack is configured well', review: [5, 5, 2, 3, 4] },
    { question: 'Results can be displayed', review: [5, 5, 5, 5, 4] },
  ];

  render(
    <div>
      <LikertScale
        reviews={reviews}
        onClick={onClick}
      />
      <hr/>
      <LikertScale
        reviews={results}
      />
    </div>, root)
});
