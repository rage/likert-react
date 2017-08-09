import React from "react";
import SentimentWrapper from "sentiment-wrapper/index";
import MdSentimentVeryDissatisfied from "react-icons/lib/md/sentiment-very-dissatisfied";
import MdSentimentDissatisfied from "react-icons/lib/md/sentiment-dissatisfied";
import MdSentimentNeutral from "react-icons/lib/md/sentiment-neutral";
import MdSentimentSatisfied from "react-icons/lib/md/sentiment-satisfied";
import MdSentimentVerySatisfied from "react-icons/lib/md/sentiment-very-satisfied";

export default ({ question, answer, onClick, icons, highlightColor }) => {
  const defaultIcons = [
    <MdSentimentVeryDissatisfied key="1" />,
    <MdSentimentDissatisfied key="2" />,
    <MdSentimentNeutral key="3" />,
    <MdSentimentSatisfied key="4" />,
    <MdSentimentVerySatisfied key="5" />
  ];

  return (
    <div role="radiogroup" aria-label={`${question}`} tabIndex="0">
      <SentimentWrapper question={question} answer={answer} onClick={onClick} highlightColor={highlightColor}>
        {icons ? icons : defaultIcons}
      </SentimentWrapper>
    </div>
  );
};
