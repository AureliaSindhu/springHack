import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import sideline from '../pics/side-line.png';
import qLogo from '../pics/q-logo.png';
// Ensure correct import based on the actual package/library
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure apikey is correctly retrieved and exists
const apikey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apikey) {
    throw new Error('API key is missing!');
}
const genAI = new GoogleGenerativeAI(apikey);

function StudyPlan() {
    const [topic, setTopic] = useState('Here you can add details about your study plan.');
    const [file, setFile] = useState(null);
    const [planDetails, setPlanDetails] = useState('');
    const [planColor, setPlanColor] = useState('#008cf2');
    const [plan, setPlan] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate(); 

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFile(event.target.files[0]);
        } else {
            setFile(null);
        }
    };

    const handleRequest = (event) => {
        setPlanDetails(event.target.value);
    };

    const handlePlanGenerator = async () => {
        if (!planDetails && !file) {
            alert('Please provide plan details or upload a file.');
            return;
        }
    
        try {
            console.log('Generating plan with input:', planDetails);
    
            const planPrompt = `Generate a detailed study plan for "${planDetails}" that spans multiple weeks. Include specific weekly goals, daily tasks, resources, and methods for evaluation.`;
            const planModel = genAI.getGenerativeModel({
                model: 'gemini-1.5-flash',
                generationConfig: {
                    response_mime_type: 'application/json',
                },
            });
    
            const planResult = await planModel.generateContent(planPrompt);
            const planResponse = await planResult.response.text();
            console.log('Plan API Response Text:', planResponse);
    
            let parsedPlanResponse;
            try {
                parsedPlanResponse = JSON.parse(planResponse);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                alert('An error occurred while parsing the plan response. Please check the API response.');
                return;
            }
    
            console.log('Parsed Plan Response:', parsedPlanResponse);

            if (parsedPlanResponse && parsedPlanResponse.weeks && Array.isArray(parsedPlanResponse.weeks)) {
                setPlan(parsedPlanResponse);
                navigate('/plan-page', { state: { plan: parsedPlanResponse } });
            } else {
                throw new Error('Invalid plan response structure');
            }

            // if (parsedPlanResponse.studyPlan && Array.isArray(parsedPlanResponse.studyPlan.weeks)){
            //     setPlan(parsedPlanResponse.studyPlan);
            //     navigate('/plan-page', { state: { plan: parsedPlanResponse.studyPlan}});
            // } else{
            //     throw new Error('Invalid plan response structure');
            // }

        } catch (error) {
            console.error('Error generating plan:', error);
            alert('An error occurred while generating the plan. Please try again.');
        }
    };    
    

    return (
        <div className="plan-container">
            <div className="left-side mt-4">
                <Navbar planColor={planColor} />
            </div>
            <img src={sideline} alt="side line" className="side-line" />

            <div className="right-side col-9">
                <div className="header-plan mt-4">
                    <Link to="/" className="header-plan-left-back">
                        <i className="bi bi-arrow-left my-1 p-2" alt="back" /> Back
                    </Link>
                    <button className="header-right-btn2 mt-3" onClick={handleUploadClick}>
                        Upload +
                    </button>
                </div>
                <div className="plan-content">
                    <h1 className="m-4">Generate <span className="plan-text"> Plan </span></h1>

                    <div className="input-section">
                        <p>{topic}</p>

                        <button className="input-button" onClick={handleUploadClick}>
                            <div className="input-box">
                                <h2>
                                    <span className="click-here">Click here </span>to upload your schedule and we'll do the rest!
                                </h2>
                                <img src={qLogo} alt="Q Logo" />
                            </div>
                        </button>

                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".pdf,.docx,.pptx,.txt"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>

                    <div className="chatBox d-inline-flex mt-3">
                        {!file && (
                            <div className="generateBar mt-2 d-flex">
                                <input
                                    type="text"
                                    placeholder="Enter your plan details"
                                    value={planDetails}
                                    onChange={handleRequest}
                                    className="w-100 border-0 rounded-3 p-2"
                                />
                            </div>
                        )}

                        <button
                            className="header-right-btn mx-3 mt-2"
                            onClick={handlePlanGenerator}
                            disabled={!planDetails && !file}
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyPlan;
