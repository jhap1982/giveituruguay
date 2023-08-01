import React from 'react';
import './RepoList.css';
import rotatingSvg from './logo.svg'; // Importamos el logo SVG correctamente

const RotatingSvg = () => {
  return (
    <div className="logo-container">
      <img
        className="rotating-logo"
        src={rotatingSvg} // Utilizamos la variable rotatingSvg para el src
        alt="Red Hot Chili Peppers Logo"
      />
    </div>
  );
};

const RepoList = ({ directories }) => {
  return (
    <div className="container">
      <h1>Give It Uruguay!</h1>
      <RotatingSvg />
      <ul className="repo-list">
        {directories.map((directory) => (
          <li key={directory.name}>
            <a
              title={directory.name}
              href={directory.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link"
            >
              {directory.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
