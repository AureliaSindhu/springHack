import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import sideline from '../pics/side-line.png';
import { GoogleGenerativeAI } from "@google/generative-ai";
import qLogo from '../pics/q-logo.png';

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

    const [qizColor, setQizColor] = React.useState('#008cf2');

    const changeColor = () => {
        setQizColor('#008cf2');
    };

    const handleGenerateQuiz = async () => {
        if (!topic && !file) {
            alert('Please provide either a file or a topic.');
            return;
        }
    
        try {
            const prompt = `Generate a set of flashcards and multiple-choice questions for the topic: "${topic}". Provide 10 flashcards and 5 multiple-choice questions with 4 options each. Include the correct answer for each question.`;
    
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
    
            const { flashcards = [], multipleChoiceQuestions = [], download_url = '' } = parsedResponse;
    
            setFlashcards(flashcards);
            setMultipleChoiceQuestions(multipleChoiceQuestions);
            setDownloadLink(download_url);
    
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
                <Navbar qizColor={qizColor} />
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
                        disabled={!topic && !file}
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
                        <div className="inputFile">
                            <button className="input-button" onClick={handleUploadClick}>
                                <div className="input-box">
                                    <h2> <span className="click-here">Click here </span>to upload your
                                        schedule and we'll do the rest!
                                    </h2>

                                    <img src={qLogo} alt="q Logo" />
                                </div>
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

                        <button
                            className="header-right-btn mx-3 mt-2"
                            onClick={handleGenerateQuiz}
                            disabled={!topic && !file}
                        >
                            Generate
                        </button>

                        {downloadLink && (
                            <a href={downloadLink} className="btn btn-primary mt-3" download>
                                Download Material
                            </a>
                        )}
                        {/* <img src='icon.png' className={iconVisible ? 'iconTurn visible' : 'iconTurn'} /> Conditionally apply visible class */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qiz;
