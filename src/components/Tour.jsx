import React from 'react';
import './Tour.css'

function Tour(data) {
    return (
        <div className="tour-container">
            <h3>{data.yearData.name}</h3>

            <h2>
                <a href={data.yearData.link} target="_blank" rel="noopener noreferrer" >
                    Github showcase
                </a>
            </h2>

            <table>
                <thead>
                    <tr>
                        <th>Concert</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default Tour;