import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import sideline from '../pics/side-line.png';
import './PlanPage.css';  

const PlanPage = () => {
    const [planColor] = useState('#008cf2');
    const [showGoal, setShowGoal] = useState(true);
    const [showDailyTasks, setShowDailyTasks] = useState(true);
    const [showEvaluation, setShowEvaluation] = useState(true);
    const location = useLocation();
    const { plan } = location.state || {};

    if (!plan) {
        return <p>No plan available</p>;
    }

    // Extract and format weekly goals
    const weeks = plan.weeklyGoals.map((goal, index) => ({
        weekNumber: index + 1,
        weekGoal: goal.goal || 'No goal defined',
        dailyTasks: goal.tasks || [],
        evaluation: plan.evaluationMethods || [] // Ensure this is the correct data structure
    }));

    return (
        <div className="planDisplay">
            <div className="left-side mt-4">
                <Navbar planColor={planColor} />
            </div>

            <img src={sideline} alt="line" className="side-line" /> 

            <div className="plan-page">
                <h1>Generated Study Plan</h1>
                {weeks.length > 0 ? (
                    weeks.map((week) => (
                        <div key={week.weekNumber} className="week-section">
                            <h2>Week {week.weekNumber}</h2>
                            
                            {/* Goal Section */}
                            {showGoal && (
                                <div className="goal-section">
                                    <h3>Goal</h3>
                                    <p>{week.weekGoal}</p>
                                </div>
                            )}

                            {/* Content Container for Daily Tasks and Evaluation */}
                            <div className="content-container">
                                {showDailyTasks && (
                                    <div className="daily-tasks-section">
                                        <h3>Daily Tasks</h3>
                                        <ul>
                                            {week.dailyTasks.length > 0 ? (
                                                week.dailyTasks.map((task, index) => (
                                                    <li key={index}>
                                                        {task}
                                                    </li>
                                                ))
                                            ) : (
                                                <li>No daily tasks available</li>
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {showEvaluation && (
                                    <div className="evaluation-section">
                                        <h3>Evaluation Criteria</h3>
                                        <ul>
                                            {week.evaluation.length > 0 ? (
                                                week.evaluation.map((evalItem, index) => (
                                                    <li key={index}>{evalItem}</li>
                                                ))
                                            ) : (
                                                <li>No evaluation criteria available</li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Toggle Buttons */}
                            <div className="toggle-container">
                                <button className="toggle-button" onClick={() => setShowDailyTasks(!showDailyTasks)}>
                                    {showDailyTasks ? 'Hide Daily Tasks' : 'Show Daily Tasks'}
                                </button>
                                <button className="toggle-button" onClick={() => setShowEvaluation(!showEvaluation)}>
                                    {showEvaluation ? 'Hide Evaluation Criteria' : 'Show Evaluation Criteria'}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No plans available</p>
                )}
            </div>
        </div>
    );
};

export default PlanPage;
