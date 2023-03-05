import React from "react";
import "./Quizz.css";
import questions from "./QuizzData";

const QuizzResult = (props) => {
  return (
    <div className="score-section">
      <h2>Completed!</h2>
      <h4>Total score {props.score}/8</h4>
      <h4>
        Your Correct question is {props.correctAns} out of {questions.length}
      </h4>
      <button onClick={props.handlePlayAgain}>Play again</button>
    </div>
  );
};

export default QuizzResult;
