import React from "react";
import prefixer from "utils/class-name-prefixer";
import ReviewScale from "review-scale";
import styles from "./styles.scss";

const question = (questionValue, onClick, icons, highlightColor, container, lineClassName, frozen=false) => {
  return (
    <div aria-required key={questionValue.question} className={container}>
      <div className={styles.question}>{questionValue.question}</div>
      <div className={lineClassName} />
      <ReviewScale
        answer={questionValue.review}
        question={questionValue.question}
        onClick={onClick}
        icons={icons}
        highlightColor={highlightColor}
        frozen={frozen}
      />
    </div>
  );
};

const result = (questionValue, onClick, icons, highlightColor, container, lineClassName) => {
  let sum = 0, count = 0;
  for (const answer of questionValue.review) {
    sum += answer;
    count++;
  }
  questionValue.review = Math.round(sum/count);
  return question(questionValue, onClick, icons, highlightColor, container, lineClassName, true)
};

export default ({ reviews, onClick, separatorType = 'dotted-line', icons, highlightColor = '#3498db' }) => {
  if (reviews === undefined) {
    throw new Error("The 'reviews' prop is required.");
  }
  const lineClassName = separatorType === "dotted-line"
    ? styles["dotted-line"]
    : separatorType === "striped" ? "" : styles["full-line"];
  const container = separatorType === "striped"
    ? styles["container-striped"]
    : styles.container;
  return (
    <div>
      {reviews.map(questionValue => Array.isArray(questionValue.review)
        ? result(questionValue, onClick, icons, highlightColor, container, lineClassName)
        : question(questionValue, onClick, icons, highlightColor, container, lineClassName))}
    </div>
  );
};
