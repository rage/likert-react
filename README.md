# React Likert scale

![React Likert scale example](https://github.com/rage/likert-react/blob/master/docs/likert-example.gif)

## Usage

```javascript
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

| Prop | description | required | default |
|------|-------------|----------|---------|
|reviews|Represents all the questions and their the currently chosen values. Follows the following format: `{ question: string, review: ?number }` | yes | `undefined` |
|onClick|A callback that gets triggered when an option is selected. Arguments passed to the callback: `reviewQuestion: string, review: number`| no | `undefined` |
|highlightColor|Color used to highlight chosen answers| no | `#3498db` |
|separatorType|Three options: `dotted-line`, `striped` and `full-line`| no | `full-line` |
|icons|An array of React-components to represent each number on the scale, from lowest to highest. There are 5 default smiley-icons as shown in the example. The scale is stretched from 1 to the amount of review scale icons. For example the 5 default smiley-icons will result in the classic 1-5 Likert scale.| no | A good set of icons |



