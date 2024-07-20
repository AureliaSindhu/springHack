import React from 'react';
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
    const location = useLocation();
    const { flashcards = [], multipleChoiceQuestions = [], topic = '' } = location.state || {};

    // Debugging: Log the data to verify it's coming through
    console.log('Flashcards data:', flashcards);
    console.log('Multiple Choice Questions data:', multipleChoiceQuestions);
    console.log('Topic:', topic);

    return (
        <div className="flashcards-container">
            <h1>Flashcards and Quiz for <span>{topic}</span></h1>

            <div className="flashcards-list">
                <h2>Flashcards</h2>
                {flashcards.length > 0 ? (
                    flashcards.map((flashcard, index) => (
                        <div key={index} className="flashcard">
                            <div className="question">{flashcard.front}</div>
                            <div className="answer">{flashcard.back}</div>
                        </div>
                    ))
                ) : (
                    <p>No flashcards available.</p>
                )}
            </div>

            <div className="quiz-section">
                <h2>Multiple Choice Quiz</h2>
                {multipleChoiceQuestions.length > 0 ? (
                    multipleChoiceQuestions.map((question, index) => (
                        <div key={index} className="quiz-question">
                            <p>{question.question}</p>
                            <ul>
                                {question.options.map((option, i) => (
                                    <li key={i}>{option}</li>
                                ))}
                            </ul>
                            <p>Answer: {question.answer}</p>
                        </div>
                    ))
                ) : (
                    <p>No multiple choice questions available.</p>
                )}
            </div>
        </div>
    );
};

export default Flashcards;
