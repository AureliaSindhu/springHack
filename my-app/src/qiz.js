import React, {useState} from 'react';

// const generateMaterialFromTopic = async (topic) => {
//     const response = await fetch('/api/generateMaterial', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ topic }),
//     });
//     const data = await response.json();
//     return data.material;
// };

// Mock function to simulate AI content generation
const generateMaterialFromTopic = async (topic) => {
    // Replace this with actual API call to Gemini AI or similar service
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Generated material for topic: ${topic}`);
        }, 1000);
    });
};

// Mock function to simulate AI file translation
const translateFileToText = async (file) => {
    // Replace this with actual API call for file translation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Translated text from file: ${file.name}`);
        }, 1000);
    });
};

// Mock function to create multiple-choice quiz from the material
const createQuizFromMaterial = async (material) => {
    // Replace this with actual quiz generation logic
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                questions: [
                    { question: `What is ${material}?`, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswer: 'Option 1' },
                ],
            });
        }, 1000);
    });
};

const Qiz = () => {
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState('');
    const [quiz, setQuiz] = useState(null);
    const [viewMaterial, setViewMaterial] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleGenerateMaterial = async () => {
        setIsLoading(true);
        try {
            let generatedMaterial;
            if (topic) {
                generatedMaterial = await generateMaterialFromTopic(topic);
            } else if (file) {
                generatedMaterial = await translateFileToText(file);
            } else {
                alert('Please provide a topic or upload a file.');
                setIsLoading(false);
                return;
            }
            setMaterial(generatedMaterial);
            const quizData = await createQuizFromMaterial(generatedMaterial);
            setQuiz(quizData);
        } catch (error) {
            console.error('Error generating material or quiz:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="qiz-container">
            <h1>Qiz - Create a Quiz</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter a topic"
                    value={topic}
                    onChange={handleTopicChange}
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button onClick={handleGenerateMaterial} disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Generate Material'}
                </button>
            </div>

            {material && !viewMaterial && (
                <div className="material-preview">
                    <h2>Material Generated</h2>
                    <p>{material}</p>
                    <button onClick={() => setViewMaterial(true)}>View Material</button>
                    <button onClick={() => setQuiz(null)}>Start Quiz</button>
                </div>
            )}

            {viewMaterial && (
                <div className="material-view">
                    <h2>Material</h2>
                    <p>{material}</p>
                    <button onClick={() => setViewMaterial(false)}>Back</button>
                </div>
            )}

            {quiz && (
                <div className="quiz-section">
                    <h2>Quiz</h2>
                    {quiz.questions.map((q, index) => (
                        <div key={index} className="question">
                            <p>{q.question}</p>
                            {q.options.map((option, i) => (
                                <div key={i} className="option">
                                    <input type="radio" id={`q${index}o${i}`} name={`q${index}`} />
                                    <label htmlFor={`q${index}o${i}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Qiz;