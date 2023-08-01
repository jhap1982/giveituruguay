import React from "react";
import "./RepoList.css";
import rotatingSvg from "./logo.svg";

const RepoList = ({ directories }) => {
  const numPills = directories.length;
  const pillAngle = (2 * Math.PI) / numPills;
  const pillRadius = 150;

  const calculatePosition = (index) => {
    const angle = index * pillAngle;
    const x = Math.cos(angle) * pillRadius;
    const y = Math.sin(angle) * pillRadius;
    return { x, y };
  };

  return (
    <div>
      <div className="logo-container">
        <img src={rotatingSvg} alt="Logo" className="rotating-logo" />
      </div>
      <h2>Give It Uruguay!</h2>
      <div className="repo-list">
        {directories.map((directory, index) => (
          <a
            key={index}
            href={`https://github.com/jhap1982/giveituruguay/tree/main/${directory}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
            style={{
              top: `calc(50% + ${calculatePosition(index).y}px)`,
              left: `calc(50% + ${calculatePosition(index).x}px)`,
            }}
          >
            {directory}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
