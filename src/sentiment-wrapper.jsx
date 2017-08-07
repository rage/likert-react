// @flow
import React, { Component } from 'react';
import prefixer from 'utils/class-name-prefixer';

const notChosen = prefixer('scale-icon');
const highlighted = `${notChosen} ${prefixer('highlighted')}`;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

type Props = {
  children: any,
  answer: number,
  onClick: (string, number) => void,
  question: string,
};

export default class SentimentWrapper extends Component {

  constructor(props: Props) {
    super(props);
    this.focusables = [];
    this.amountOfChildren = this.props.children.length;
  }

  componentDidMount() {
    // the scale is assumed to start from 1
    for (let i = 1; i <= this.amountOfChildren; i++) {
      this.focusables[i] = document.getElementById(`${this.props.question}-${i}`);
    }
  }

  focusables: Array<?HTMLElement>;
  amountOfChildren: number;

  radioOnKeyDown(e: KeyboardEvent) {
    let answer = !this.props.answer ? 0 : this.props.answer;
    let reviewKeyPressed = false;
    switch (e.keyCode) {
      case KEY_UP:
      case KEY_RIGHT:
        answer = (answer + 1 <= this.amountOfChildren) ? (answer + 1) : 1;
        this.props.onClick(this.props.question, answer);
        reviewKeyPressed = true;
        break;
      case KEY_DOWN:
      case KEY_LEFT:
        answer = (answer - 1 >= 1) ? (answer - 1) : this.amountOfChildren;
        this.props.onClick(this.props.question, answer);
        reviewKeyPressed = true;
        break;
      default:
    }
    if (reviewKeyPressed && this.focusables[answer]) { this.focusables[answer].focus(); }
  }

  render() {
    return (
      <div>
        {this.props.children.map((child, m) => {
          const n = m + 1;
          return React.cloneElement(child, {
            className: this.props.answer === n ? highlighted : notChosen,
            onClick: () => this.props.onClick(this.props.question, n),
            role: 'radio',
            id: `${this.props.question}-${n}`,
            key: `${this.props.question}-${n}`,
            'aria-checked': this.props.answer === n,
            onKeyDown: e => this.radioOnKeyDown(e),
            tabIndex: (this.props.answer === n || (n === 1 && this.props.answer === undefined)) ? '0' : '-1',
          });
        })
      }
      </div>
    );
  }
}
