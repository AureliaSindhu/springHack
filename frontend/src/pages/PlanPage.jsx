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

    const weeks = plan.weeks.map((weekData, index) => ({
        weekNumber: index + 1,
        weekGoal: weekData.week_goal,
        dailyTasks: weekData.daily_tasks,
        evaluation: weekData.evaluation
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
                            {week.dailyTasks.length ? (
                                week.dailyTasks.map((task, index) => (
                                    <li key={index}>
                                        <strong>{task.day}:</strong> {task.task}
                                        <ul>
                                            {task.resources && task.resources.map((resource, resIndex) => (
                                                <li key={resIndex}><a href={resource}>{resource}</a></li>
                                            ))}
                                        </ul>
                                        <p><strong>Evaluation:</strong> {task.evaluation}</p>
                                    </li>
                                ))
                            ) : (
                                <li>No daily tasks available</li>
                            )}
                        </ul>
                        <h3>Evaluation Criteria</h3>
                        <p>{week.evaluation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlanPage;
