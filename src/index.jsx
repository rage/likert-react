import React from "react";
import prefixer from "utils/class-name-prefixer";
import ReviewScale from "review-scale";
import styles from "./styles.scss";

export default ({ reviews, onClick, separatorType, icons, highlightColor = '#3498db' }) => {
  const lineClassName = separatorType === "dotted-line"
    ? styles["dotted-line"]
    : separatorType === "striped" ? "" : styles["full-line"];
  const container = separatorType === "striped"
    ? styles["container-striped"]
    : styles.container;
  return (
    <div>
      {reviews.map(questionValue => (
        <div aria-required key={questionValue.question} className={container}>
          <div className={styles.question}>{questionValue.question}</div>
          <div className={lineClassName} />
          <ReviewScale
            answer={questionValue.review}
            question={questionValue.question}
            onClick={onClick}
            icons={icons}
            highlightColor={highlightColor}
          />
        </div>
      ))}
    </div>
  );
};
