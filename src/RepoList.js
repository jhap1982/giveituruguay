import React from "react";
import "./RepoList.css";
import rotatingSvg from "./logo.svg";

const RepoList = ({ directories }) => {
  return (
    <div className="container">
      <h1>Give It Uruguay!</h1>
      <div className="logo-container">
        <img src={rotatingSvg} alt="Logo" className="rotating-logo" />
      </div>
      <div className="repo-list">
        {directories.map((directory, index) => (
          <a
            key={index}
            href={`https://github.com/jhap1982/giveituruguay/tree/main/${directory}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            {directory}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
