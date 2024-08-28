import React from 'react';
import './Flashcards.css'

const FlashcardsList = ({ flashcards }) => {
    return (
        <div className="flashcards-list">
            {/* <h2>Flashcards</h2> */}
            {flashcards.map((flashcard, index) => (
                <div key={index} className="flashcard">
                    <div className="question">{flashcard.front}</div>
                    <div className="answer">{flashcard.back}</div>
                </div>
            ))}
        </div>
    );
};

export default FlashcardsList;