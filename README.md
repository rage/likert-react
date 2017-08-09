# React Likert Scale

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
  const onClick = (q, n) => console.info('question: ' + q + ' answer: ' + n);
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
|icons|An array of React-components representing each number on the scale, ordered from lowest to highest. The answer scale from from 1 to the amount of given icons.| no | 5 smiley icons from [Google](https://material.io/icons/#ic_sentiment_very_satisfied)|


## SeparatorType Examples

`full-line`

![full-line example](https://github.com/rage/likert-react/blob/master/docs/likert-full-line-example.png)

`dotted-line`

![dotted-line example](https://github.com/rage/likert-react/blob/master/docs/likert-dotted-line-example.png)
