import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const PlanPage = () => {
    const [planColor] = React.useState('#008cf2');
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
                    const { title, days = [] } = plan[week];  // Ensure days is always an array

                    return (
                        <div key={week}>
                            <h2>{week}</h2>
                            <h2>{title}</h2>
                            <ul>
                                {days.length > 0 ? (
                                    days.map((day, dayIndex) => (
                                        <li key={dayIndex}>
                                            <strong>{day.day}:</strong>
                                            <ul>
                                                {day.tasks.map((task, taskIndex) => (
                                                    <li key={taskIndex}>{task}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))
                                ) : (
                                    <p>No tasks available for this week.</p>
                                )}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlanPage;
