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
    // ---- implementation for changing Generate Qiz color 
    const [qizColor, setQizColor] = React.useState('#008cf2');

    const changeColor = () => {
        setQizColor('#008cf2');
    };
    // ----
    
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
                <Navbar qizColor={qizColor}/>
                {/* remove qizColor={qizColor} if it causes problems with further 
                implementation*/}
            </div>
            <img src={sideline} alt="line" className="side-line"/>
            
            <div className="right-side col-9">
                <div className="header-qiz mt-4">
                    <Link to="/" className="header-left-back col-9">
                        <i className="bi bi-arrow-left my-1 p-2" alt="back"/>Back 
                    </Link>
                    <button className="header-right-btn mx-4 mt-3"> Generate </button>
                    <button className="header-right-btn mt-3" onClick={handleUploadClick}> Upload + </button>
                </div>
                
                <div className="qiz-content">
                    <h1 className="m-4"> Generate <span className="qiz-text"> Qiz </span></h1>
                    <div className="input-section">
                        <input
                            type="file"
                            ref={fileInputRef}  // Attach ref to the file input
                            onChange={handleFileChange}  // Event handler for file selection
                            style={{ display: 'none' }}
                        />

                        <input
                            type="file"
                            accept=".pdf,.docx,.pptx"
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
        </div>
            
    );
};

export default Qiz;
