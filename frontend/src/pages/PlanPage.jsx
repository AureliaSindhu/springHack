import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const PlanPage = () => {
    const [planColor] = React.useState('#008cf2');
    const location = useLocation();
    const { plan } = location.state || {};

    if (!plan || !Array.isArray(plan.weeks)) {
        return <p>No plan available</p>;
    }

    const weeks = plan.weeks.map((weekData, index) => ({
        weekNumber: weekData.week_number || index + 1,
        weekGoal: weekData.week_goal || 'No goal defined',
        dailyTasks: weekData.daily_tasks || [], // Default to empty array if undefined
        evaluation: weekData.evaluation || [] // Default to empty array if undefined
    }));

    console.log(weeks);

    return (
        <div className="planDisplay">
            <div className="left-side mt-4">
                <Navbar planColor={planColor} />
            </div>

            <div className="plan-page">
                <h1>Generated Study Plan</h1>
                {weeks.map((week) => (
                    <div key={week.weekNumber}>
                        <h2>Week {week.weekNumber}</h2>
                        <h3>Goal</h3>
                        <p>{week.weekGoal}</p>
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
                ))}
            </div>
        </div>
    );
};

export default PlanPage;
