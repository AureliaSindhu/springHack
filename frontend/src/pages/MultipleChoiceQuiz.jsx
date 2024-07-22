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

import React from 'react';

const MultipleChoiceQuiz = ({ questions }) => {
    return (
        <div className="quiz-section">
            <h2>Multiple Choice Quiz</h2>
            {questions.length > 0 ? (
                questions.map((question, index) => (
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
    );
};

export default MultipleChoiceQuiz;
