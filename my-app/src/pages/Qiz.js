import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../pics/q-logo.png'
import sideline from '../pics/side-line.png'

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
            <div className="left-side mt-4">
                <Navbar />
            </div>
            <img src={sideline} alt="line" className="side-line"/>
            
            <div className="right-side col-9">
                <div className="header-qiz mt-4">
                    <Link to="/" className="header-left-back col-9">
                        <i className="bi bi-arrow-left my-1 p-2" alt="back"/>Back 
                    </Link>
                    <button className="header-right-btn"> Generate </button>
                    <button className="header-right-btn" onClick={handleUploadClick}> Upload + </button>

                    <input
                        type="file"
                        ref={fileInputRef}  // Attach ref to the file input
                        onChange={handleFileChange}  // Event handler for file selection
                        style={{ display: 'none' }}
                    />
                </div>
                
                <div className="qiz-content">
                    <h1 className="m-4"> Generate <span className="qiz-text"> Qiz </span></h1>
                    <div className="input-section">

                        <div className="inputFile">
                            <input
                                type="file"
                                accept=".pdf,.docx,.pptx,.txt"
                                onChange={handleFileChange}
                            />

                            <button>
                                Submit
                            </button>
                        </div>

                        <div className="generateBar">
                            <input
                                type="text"
                                placeholder="Enter a topic"
                                value={topic}
                                onChange={handleTopicChange}
                            />
                            <button> <img src={logo}></img></button>
                        </div>
                        
                        {/* <button onClick={handleGenerateMaterial} disabled={isLoading}>
                            {isLoading ? 'Generating...' : 'Generate Material'}
                        </button> */}
                    </div>
                </div>      
            </div>
        </div>
            
    );
};

export default Qiz;
