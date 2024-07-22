// import React from 'react';

// const MultipleChoiceQuiz = ({ questions }) => {
//     console.log('Questions in MultipleChoiceQuiz:', questions);  // Debugging
//     return (
//         <div className="quiz-section">
//             <h2>Multiple Choice Quiz</h2>
//             {questions.length > 0 ? (
//                 questions.map((question, index) => (
//                     <div key={index} className="quiz-question">
//                         <p>{question.question}</p>
//                         <ul>
//                             {question.options.map((option, i) => (
//                                 <li key={i}>{option}</li>
//                             ))}
//                         </ul>
//                         <p>Answer: {question.answer}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No multiple choice questions available.</p>
//             )}
//         </div>
//     );
// };

// export default MultipleChoiceQuiz;

import React, { useState } from 'react';

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
                    <p>{question.question}</p>
                    <ul className="options-list">
                        {question.options.map((option, answerIndex) => (
                            <li key={answerIndex}>
                                <button
                                    className={`answer-button ${showResults && selectedAnswers[questionIndex] === answerIndex ? (question.answer === option ? 'correct' : 'incorrect') : ''}`}
                                    onClick={() => handleAnswerSelect(questionIndex, answerIndex)}
                                    disabled={showResults}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {showResults && (
                        <p className="result">
                            {selectedAnswers[questionIndex] === question.options.indexOf(question.answer)
                                ? 'Correct!'
                                : `Incorrect, the correct answer is ${question.answer}`}
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
