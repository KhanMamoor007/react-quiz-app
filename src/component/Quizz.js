import React, { useState } from "react";
import "./Quizz.css";
import questions from "./QuizzData";
import QuizzResult from "./QuizzResult";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAns(correctAns + 1);
      const nextQuestion = currentQuestion + 1;
      setClicked(false);
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    } else {
      setClicked(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
    setClicked(false);
  };

  return (
    <>
      <div className="app">
        {showResult ? (
          <QuizzResult
            score={score}
            correctAns={correctAns}
            handlePlayAgain={handlePlayAgain}
          />
        ) : (
          <>
            <div className="question-section">
              {/* <h5>score:{score}</h5> */}
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answersOptions.map((ans, i) => {
                return (
                  <button
                    className={`button ${
                      clicked && !ans.isCorrect ? "incorrect" : ""
                    } ${clicked && ans.isCorrect ? "correct" : ""}`}
                    // disabled={clicked}
                    key={i}
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                  >
                    {ans.answerText}
                  </button>
                );
              })}

              <div className="actions">
                <button onClick={handlePlayAgain}>Quit</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quizz;
