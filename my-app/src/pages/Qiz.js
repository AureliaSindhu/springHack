import React, { useState } from 'react';
import Navbar from './Navbar';
// import { BrowserRouter as Link } from 'react-router-dom';

const Qiz = () => {
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    // const [material, setMaterial] = useState('');
    // const [quiz, setQuiz] = useState(null);
    // const [viewMaterial, setViewMaterial] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div className="qiz-container">
            <Navbar />

            <div className="header-qiz">
                <div className="header-left">
                    {/* <Link to="/"> Back </Link> */}
                </div>
                <div className="header-right">
                    <button className="signIn"> Generate </button>
                    <button className="signIn"> Upload + </button>
                </div>
                
            </div>
            
            <div className="qiz-content">
                <h1> Generate <span> Qiz </span></h1>
                <div className="input-section">
                    <input
                        type="file"
                        accept=".pdf,.docx,.pptx"
                        onChange={handleFileChange}
                    />

                    {/* <input
                        type="text"
                        placeholder="Enter a topic"
                        value={topic}
                        onChange={handleTopicChange}
                    /> */}
                    
                    {/* <button onClick={handleGenerateMaterial} disabled={isLoading}>
                        {isLoading ? 'Generating...' : 'Generate Material'}
                    </button> */}
                </div>
            </div>      
        </div>
    );
};

export default Qiz;
