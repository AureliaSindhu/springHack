import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import sideline from '../pics/side-line.png';
import FlashcardsList from './FlashcardsList';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

const Flashcards = () => {
    const location = useLocation();
    const { flashcards = [], multipleChoiceQuestions = [], topic = '' } = location.state || {};

    const [activeTab, setActiveTab] = useState('flashcards');

    useEffect(() => {
        console.log('Flashcards Data Received:', flashcards);
        console.log('Multiple Choice Questions Data Received:', multipleChoiceQuestions);
        console.log('Topic:', topic);
    }, [flashcards, multipleChoiceQuestions, topic]);

    const [qizColor, setQizColor] = React.useState('#008cf2');

    const changeColor = () => {
        setQizColor('#008cf2');
    };

    return (
        <div className="flashcards-container">
            <div className="left-side mt-4">
                <Navbar qizColor={qizColor} />
            </div>
            <img src={sideline} alt="line" className="side-line" />

            <div className="flashcardSec">
                <h1>Flashcards and Quiz for <span>{topic}</span></h1>
                
                <div className="tabs">
                    <button
                        className={activeTab === 'flashcards' ? 'tab active' : 'tab'}
                        onClick={() => setActiveTab('flashcards')}
                    >
                        Flashcards
                    </button>
                    <button
                        className={activeTab === 'multipleChoice' ? 'tab active' : 'tab'}
                        onClick={() => setActiveTab('multipleChoice')}
                    >
                        Multiple Choice
                    </button>
                </div>

                {activeTab === 'flashcards' && flashcards.length > 0 ? (
                    <FlashcardsList flashcards={flashcards} />
                ) : (
                    activeTab === 'flashcards' && <p>No flashcards available.</p>
                )}

                {activeTab === 'multipleChoice' && multipleChoiceQuestions.length > 0 ? (
                    <MultipleChoiceQuiz questions={multipleChoiceQuestions} />
                ) : (
                    activeTab === 'multipleChoice' && <p>No multiple choice questions available.</p>
                )}
            </div>
        </div>
    );
};

export default Flashcards;

