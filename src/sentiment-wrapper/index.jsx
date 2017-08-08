// @flow
import React, { Component } from 'react';
import prefixer from 'utils/class-name-prefixer';
import styles from './styles.scss';

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

export default class SentimentWrapper extends Component {

  constructor(props: Props) {
    super(props);
    this.focusables = [];
    this.amountOfChildren = this.props.children.length;
    this.state = { chosen: this.props.answer };
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
        this.setState({ chosen: answer });
        this.props.onClick(this.props.question, answer);
        reviewKeyPressed = true;
        break;
      case KEY_DOWN:
      case KEY_LEFT:
        answer = (answer - 1 >= 1) ? (answer - 1) : this.amountOfChildren;
        this.setState({ chosen: answer });
        this.props.onClick(this.props.question, answer);
        reviewKeyPressed = true;
        break;
      default:
    }
    if (reviewKeyPressed && this.focusables[answer]) { this.focusables[answer].focus(); }
  }

  render() {
    return (
      <div className={styles.sentiment}>
        {this.props.children.map((child, m) => {
          const n = m + 1;
          return React.cloneElement(child, {
            className: this.state.chosen === n ? styles.highlighted : '',
            onClick: () => {
              this.setState({ chosen: n });
              this.props.onClick(this.props.question, n);
            },
            role: 'radio',
            id: `${this.props.question}-${n}`,
            key: `${this.props.question}-${n}`,
            'aria-checked': this.state.chosen === n,
            onKeyDown: e => this.radioOnKeyDown(e),
            tabIndex: (this.state.chosen === n || (n === 1 && this.state.chosen === undefined)) ? '0' : '-1',
          });
        })
      }
      </div>
    );
  }
}
