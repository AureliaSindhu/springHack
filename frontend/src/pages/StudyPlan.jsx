import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import sideline from '../pics/side-line.png';
import qLogo from '../pics/q-logo.png';

function StudyPlan() {
    const [planDetails, setPlanDetails] = useState('Here you can add details about your study plan.');
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Example of side effects or data fetching
        console.log('StudyPlan component mounted');
    }, []);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const [file, setFile] = useState(null);

    const [planColor, setPlanColor] = React.useState('#008cf2');

    const changeColor = () => {
        setPlanColor('#008cf2');
    };

    return (
        <div className="plan-container">

            <div className="left-side mt-4">
                <Navbar planColor={planColor}/>

            </div>
            <img src={sideline} alt="line" className="side-line" />


            <div className="right-side col-9">
                <div className="header-plan mt-4">
                    <Link to="/" className="header-plan-left-back">
                        <i className="bi bi-arrow-left my-1 p-2" alt="back" />Back
                    </Link>
                    <button className="header-right-btn2 mt-3" onClick={handleUploadClick}>
                        Upload +
                    </button>

                </div>
                <div className="plan-content">
                    <h1 className="m-4">Generate <span className="plan-text"> Plan </span></h1>

                    <div className="input-section">
                        <p>{planDetails}</p>


                        {/* Show file upload button */}
                        <button className="input-button" onClick={handleUploadClick}>
                            <div className="input-box">
                                <h2> <span class="click-here">Click here </span>to upload your
                                    schedule and we'll do the rest!
                                </h2>
                                {/* <button type='button' onClick={handleUploadClick}>
                                    Upload File
                                </button> */}

                                <img src={qLogo} alt="q Logo" />
                            </div>
                        </button>

                        <input
                            type='file'
                            id='file'
                            name='file'
                            accept=".pdf,.docx,.pptx,.txt"
                            ref={fileInputRef}
                            // onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            </div>



        </div>

    );
}

export default StudyPlan;