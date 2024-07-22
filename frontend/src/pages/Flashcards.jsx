// import React from 'react';
// import Navbar from './Navbar';
// import { useLocation } from 'react-router-dom';
// import sideline from '../pics/side-line.png';
// import FlashcardsList from './FlashcardsList';
// import MultipleChoiceQuiz from './MultipleChoiceQuiz';

// const Flashcards = () => {
//     const location = useLocation();
//     const { flashcards = [], multipleChoiceQuestions = [], topic = '' } = location.state || {};

//     console.log('Flashcards:', flashcards);  // Debugging
//     console.log('Multiple Choice Questions:', multipleChoiceQuestions);  // Debugging
//     console.log('Topic:', topic);  // Debugging

//     const [qizColor, setQizColor] = React.useState('#008cf2');

//     const changeColor = () => {
//         setQizColor('#008cf2');
//     };

//     return (
//         <div className="flashcards-container">
//             <div className="left-side mt-4">
//                 <Navbar qizColor={qizColor} />
//             </div>
//             <img src={sideline} alt="line" className="side-line" />

//             <div className="flashcardSec">
//                 <h1>Flashcards and Quiz for <span>{topic}</span></h1>

//                 {flashcards.length > 0 ? (
//                     <FlashcardsList flashcards={flashcards} />
//                 ) : (
//                     <p>No flashcards available.</p>
//                 )}

//                 {multipleChoiceQuestions.length > 0 ? (
//                     <MultipleChoiceQuiz questions={multipleChoiceQuestions} />
//                 ) : (
//                     <p>No multiple choice questions available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Flashcards;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import sideline from '../pics/side-line.png';
import FlashcardsList from './FlashcardsList';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

const Flashcards = () => {
    const location = useLocation();
    const { flashcards = [], multipleChoiceQuestions = [], topic = '' } = location.state || {};

    useEffect(() => {
        console.log('Flashcards:', flashcards);
        console.log('Multiple Choice Questions:', multipleChoiceQuestions);
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

                {flashcards.length > 0 ? (
                    <FlashcardsList flashcards={flashcards} />
                ) : (
                    <p>No flashcards available.</p>
                )}

                {multipleChoiceQuestions.length > 0 ? (
                    <MultipleChoiceQuiz questions={multipleChoiceQuestions} />
                ) : (
                    <p>No multiple choice questions available.</p>
                )}
            </div>
        </div>
    );
};

export default Flashcards;
