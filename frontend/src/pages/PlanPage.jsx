import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const PlanPage = () => {
    const [planColor] = useState('#008cf2');
    const location = useLocation();
    const { plan } = location.state || {}; 

    if (!plan) {
        return <p>No plan available</p>;
    }

    return (
        <div className="planDisplay">
            <div className="left-side mt-4">
                <Navbar planColor={planColor} />
            </div>

            <div className="plan-page">
                <h1>Generated Study Plan</h1>
                {Object.keys(plan).map((week) => {
                    const { title, tasks } = plan[week];
                    return (
                        <div key={week}>
                            <h2>{week}</h2>
                            <h2>{title}</h2>
                            <ul>
                                {tasks.map((task, index) => (
                                    <li key={index}>
                                        <strong>{task.day}:</strong> {task.task} <span>({task.time})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlanPage;
