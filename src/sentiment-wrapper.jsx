// @flow
import React, { Component } from 'react';
import prefixer from 'utils/class-name-prefixer';
import styled from 'styled-components';

const Sentiments = styled.div`
  & > * {
    cursor: pointer;
    margin: 0.2rem;
    transition: transform .2s;
    &:hover {
      transform: scale(1.3);
    }
    &.highlighted {
      transform: scale(1.2);
      cursor: pointer;
      margin: 0.2rem;
      color: blue;
    }
  }
`

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

export default class SentimentWrapper extends Component {

  constructor(props: Props) {
    super(props);
    this.focusables = [];
    this.amountOfChildren = this.props.children.length;
    this.state = { chosen: undefined };
  }

  componentDidMount() {
    // the scale is assumed to start from 1
    for (let i = 1; i <= this.amountOfChildren; i++) {
      this.focusables[i] = document.getElementById(`${this.props.question}-${i}`);
    }
  }

  radioOnKeyDown(e: KeyboardEvent) {
    let answer = !this.state.chosen ? 0 : this.state.chosen;
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
      <Sentiments>
        {this.props.children.map((child, m) => {
          const n = m + 1;
          return React.cloneElement(child, {
            className: this.state.chosen === n ? 'highlighted' : '',
            onClick: () => {
              this.setState({ chosen: n });
              this.props.onClick(this.props.question, n);
            },
            role: 'radio',
            id: `${this.props.question}-${n}`,
            key: `${this.props.question}-${n}`,
            'aria-checked': this.state.chosen === n,
            onKeyDown: e => this.radioOnKeyDown(e),
            tabIndex: (this.props.answer === n || (n === 1 && this.state.chosen === undefined)) ? '0' : '-1',
          });
        })
      }
      </Sentiments>
    );
  }
}
