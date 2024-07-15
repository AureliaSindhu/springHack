import React from 'react';
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
    const location = useLocation();
    const { flashcards, multipleChoiceQuestions, topic } = location.state || { flashcards: [], multipleChoiceQuestions: [], topic: '' };

    return (
        <div className="flashcards-container">
            <h1>Flashcards and Quiz for <span>{topic}</span></h1>

            <div className="flashcards-list">
                <h2>Flashcards</h2>
                {flashcards.map((flashcard, index) => (
                    <div key={index} className="flashcard">
                        <div className="question">{flashcard.question}</div>
                        <div className="answer">{flashcard.answer}</div>
                    </div>
                ))}
            </div>

            <div className="quiz-section">
                <h2>Multiple Choice Quiz</h2>
                {multipleChoiceQuestions.map((question, index) => (
                    <div key={index} className="quiz-question">
                        <p>{question.question}</p>
                        <ul>
                            {question.options.map((option, i) => (
                                <li key={i}>{option}</li>
                            ))}
                        </ul>
                        <p>Answer: {question.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flashcards;
