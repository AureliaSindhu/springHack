import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import axios from 'axios'; // for API request
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pics/q-logo.png';
import sideline from '../pics/side-line.png';

const Qiz = () => {
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    const [flashcards, setFlashcards] = useState([]);
    const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
    const [downloadLink, setDownloadLink] = useState(''); // Renamed from download_url
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

    const handleSubmit = async () => {
        if (!topic && !file) {
            alert('Please provide either a file or a topic.');
            return;
        }

        try {
            const formData = new FormData();
            if (file) {
                formData.append('file', file);
            }
            formData.append('topic', topic);

            const response = await axios.post('http://localhost:8000/api/generate-quiz', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Extract quiz data from the response
            const { flashcards, multipleChoiceQuestions, download_url } = response.data;

            setFlashcards(flashcards);
            setMultipleChoiceQuestions(multipleChoiceQuestions);
            setDownloadLink(download_url || '');

            navigate('/flashcards', { state: { flashcards, multipleChoiceQuestions, topic } });
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
                        onClick={handleSubmit}
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
                                <button onClick={handleSubmit}>Submit</button>
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
                            <button onClick={handleSubmit}>Submit</button>
                        </div>

                        {downloadLink && (
                            <a href={downloadLink} className="btn btn-primary mt-3" download>
                                Download Material
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qiz;
