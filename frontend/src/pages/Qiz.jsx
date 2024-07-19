import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pics/q-logo.png';
import sideline from '../pics/side-line.png';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const apikey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apikey);

const Qiz = () => {
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    const [flashcards, setFlashcards] = useState([]);
    const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
    const [downloadLink, setDownloadLink] = useState('');
    const [iconVisible, setIconVisible] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleGenerateQuiz = async () => {
        if (!topic && !file) {
            alert('Please provide either a file or a topic.');
            return;
        }

        try {
            // Example prompt for generating flashcards and multiple choice questions
            const prompt = `Generate a set of flashcards and multiple-choice questions for the topic: "${topic}". Provide 5 flashcards and 5 multiple-choice questions with 4 options each. Include the correct answer for each question.`;

            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                generationConfig: {
                    response_mime_type: "application/json"
                }
            });

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            
            let parsedResponse;
            try {
                parsedResponse = JSON.parse(text);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                return;
            }

            const { flashcards, multipleChoiceQuestions, download_url } = parsedResponse;

            setFlashcards(flashcards);
            setMultipleChoiceQuestions(multipleChoiceQuestions);
            setDownloadLink(download_url || '');

            navigate('/flashcards', { state: { flashcards, multipleChoiceQuestions, topic } });

            setIconVisible(true);
            setTimeout(() => {
                setIconVisible(false);
            }, 2000);

        } catch (error) {
            console.error('Error generating quiz:', error);
            alert('An error occurred while generating the quiz. Please try again.');
        }
    };

    return (
        <div className="qiz-container">
            <div className="left-side mt-4">
                <Navbar />
            </div>
            <img src={sideline} alt="line" className="side-line" />

            <div className="right-side col-9">
                <div className="header-qiz mt-4">
                    <Link to="/" className="header-left-back">
                        <i className="bi bi-arrow-left my-1 p-2" alt="back" />Back
                    </Link>
                    <button
                        className="header-right-btn mx-3 mt-2"
                        onClick={handleGenerateQuiz}
                        disabled={!topic && !file} // Disable the button if neither a topic nor a file is provided
                    >
                        Generate
                    </button>
                    <button className="header-right-btn mt-2" onClick={handleUploadClick}>
                        Upload +
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>

                <div className="qiz-content">
                    <h1 className="m-4">Generate <span className="qiz-text">Qiz</span></h1>
                    <div className="input-section">
                        {/* Show topic input only if no file is selected */}
                        {!file && (
                            <div className="generateBar">
                                <input
                                    type="text"
                                    placeholder="Enter a topic"
                                    value={topic}
                                    onChange={handleTopicChange}
                                />
                            </div>
                        )}

                        {/* Show file upload button */}
                        <div className="inputFile">
                            <button type='button' onClick={handleUploadClick}>
                                Upload File
                            </button>
                            <input
                                type='file'
                                id='file'
                                name='file'
                                accept=".pdf,.docx,.pptx,.txt"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>

                        {downloadLink && (
                            <a href={downloadLink} className="btn btn-primary mt-3" download>
                                Download Material
                            </a>
                        )}
                        <img src='icon.png' className={iconVisible ? 'iconTurn visible' : 'iconTurn'} /> {/* Conditionally apply visible class */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qiz;
