// ChartComponent.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ scores }) => {
    const technologies = [
        "HTML", "CSS", "JavaScript Fundamentals", "JavaScript Expert",
        "React", "Core Java", "Adv Java", "Spring", "Hibernate",
        "MySQL", "Problem Solving", "DSA", "Project", "Communication"
    ];

    const chartData = {
        labels: technologies,
        datasets: [
            {
                label: 'Scores',
                data: technologies.map(tech => scores[tech] || 0),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    };

    return (
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default ChartComponent;
