import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

function StudyPlan() {
    const [planDetails, setPlanDetails] = useState('Here you can add details about your study plan.');

    useEffect(() => {
        // Example of side effects or data fetching
        console.log('StudyPlan component mounted');
    }, []);

    return (
        <div className="study-plan">
            <Navbar />
            <div className="header-plan">
                <div className="header-left">
                    <Link to="/"> Back </Link>
                </div>
                <div className="header-right">
                    {/* <button className="signIn" onClick={handleUploadClick}> Upload + </button> */}
                </div>
            </div>

            <h1>Generate <span> Plan </span></h1>
            <p>{planDetails}</p>
        </div>
    );
}

export default StudyPlan;
