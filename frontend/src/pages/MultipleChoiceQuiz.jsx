import React, { useState } from 'react';
import './MultipleChoice.css';

const MultipleChoiceQuiz = ({ questions }) => {
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(updatedAnswers);
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    return (
        <div className="multiple-choice-quiz">
            <h2>Multiple Choice Quiz</h2>
            {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question-block">
                    <p className="q">{question.question}</p>
                    <ul className="options-list">
                        {question.options.map((option, answerIndex) => (
                            <li key={answerIndex}>
                                <button
                                    className={`answer-button ${
                                        selectedAnswers[questionIndex] === answerIndex ? 'selected' : ''
                                    } ${showResults && selectedAnswers[questionIndex] === answerIndex ? 
                                        (question.answer === option ? 'correct' : 'incorrect') : ''}`}
                                    onClick={() => handleAnswerSelect(questionIndex, answerIndex)}
                                    disabled={showResults}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* {showResults && (
                        <p
                            className={`result ${
                                selectedAnswers[questionIndex] === question.options.indexOf(question.answer)
                                    ? 'correct'
                                    : 'incorrect'
                            }`}
                        >
                            {selectedAnswers[questionIndex] === question.options.indexOf(question.answer)
                                ? 'Correct!'
                                : `Incorrect, the correct answer is ${question.answer}`}
                        </p>
                    )} */}

                    {showResults && (
                        <p className={`result ${selectedAnswers[questionIndex] === question.options.indexOf(question.answer) ? 'correct' : 'incorrect'}`}>
                            {selectedAnswers[questionIndex] === question.options.indexOf(question.answer)
                                ? 'Correct!'
                                : (
                                    <>
                                        Incorrect, the correct answer is <span className="correct-answer">{question.answer}</span>
                                    </>
                                )}
                        </p>
                    )}

                </div>
            ))}
            {!showResults && (
                <button onClick={handleShowResults} className="show-results-button">
                    Show Results
                </button>
            )}
        </div>
    );
};

export default MultipleChoiceQuiz;
