# React Likert scale

![React Likert scale example](https://github.com/rage/likert-react/blob/master/docs/likert-example.gif)

## Usage

```
import LikertScale from './index';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [
    { question: 'question' },
    { question: 'second question' },
    { question: 'third question' }
  ];
  const onClick= (q, n) => console.info('q: ' + q + ' answer: ' + n);
  render(
    <LikertScale
      reviews={reviews}
      onClick={onClick}
      separatorType="striped"
    />, root)
});
```

### Props

`reviews`: An array of objects in the following form: `{ question: string, review: number }`. This way Redux-state can be passed to the component directly. Otherwise the `review` field can be left out, in which case the component will take care of its own state.

`onClick`: Function to be called when a review icon is clicked. Receives `review question: string, review: number` as parameters. Likert scale is 1-based and the component passes the likert-review value as the second parameter (1 for the the most left icon).

`separatorType`: Three options: `dotted-line`, `striped` and `full-line` (default is `full-line`).

`icons`: An array of React-components to represent each number on the scale, from lowest to highest. There are 5 default smiley-icons as shown in the example. The scale is stretched from 1 to the amount of review scale icons. For example the 5 default smiley-icons will result in the classic 1-5 Likert scale.


