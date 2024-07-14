import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../pics/q-logo.png'

const Qiz = () => {
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    // const [material, setMaterial] = useState('');
    // const [quiz, setQuiz] = useState(null);
    // const [viewMaterial, setViewMaterial] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const fileInputRef = useRef(null);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        // setFile(selectedFile);
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); 
        }
    };

    // const generateMaterial = async () => {
    //     setIsLoading(true);
    //     try {
    //         const formData = new FormData();
    //         formData.append('file', file);
    //         const response = await axios.post('http://localhost:8000/api/parse-text', formData, {
    //             headers: {
    //             'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         setContractDetails(response.data);
    //         console.log(response.data);
    //         } catch (error) {
    //         console.error('Error parsing PDF:', error);
    //         }
    //     setIsLoading(false);
    // };

    return (
        <div className="qiz-container">
            <Navbar />

            <div className="header-qiz">
                <div className="header-left">
                    <Link to="/"> Back </Link>
                </div>
                <div className="header-right">
                    <button className="signIn"> Generate </button>
                    <button className="signIn" onClick={handleUploadClick}> Upload + </button>
                </div>
                
            </div>
            
            <div className="qiz-content">
                <h1> Generate <span> Qiz </span></h1>
                <div className="input-section">
                    <input
                        type="file"
                        ref={fileInputRef}  // Attach ref to the file input
                        onChange={handleFileChange}  // Event handler for file selection
                        style={{ display: 'none' }}
                    />

                    <input
                        type="file"
                        accept=".pdf,.docx,.pptx,.txt"
                        onChange={handleFileChange}
                    />

                    <button>
                        Submit
                    </button>

                    <input
                        type="text"
                        placeholder="Enter a topic" 
                        value={topic}
                        onChange={handleTopicChange}
                    />
                    <button> <img src={logo}></img></button>
                    
                    {/* <button onClick={handleGenerateMaterial} disabled={isLoading}>
                        {isLoading ? 'Generating...' : 'Generate Material'}
                    </button> */}
                </div>
            </div>      
        </div>
    );
};

export default Qiz;
