import React, { useState, useEffect } from 'react';

function StudyPlan() {
    const [planDetails, setPlanDetails] = useState('Here you can add details about your study plan.');

    useEffect(() => {
        // Example of side effects or data fetching
        console.log('StudyPlan component mounted');
    }, []);

    return (
        <div className="study-plan">
            <h1>My Study Plan</h1>
            <p>{planDetails}</p>
        </div>
    );
}

export default StudyPlan;
