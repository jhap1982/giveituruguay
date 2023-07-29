import React from 'react';
import RepoList from './RepoList';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming <code>soon</code>, be patient.
        </p>
        <a
          className="App-link"
          href="https://giveituruguay.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
            Give It Uruguay!
        </a>
      </header>
          <RepoList />
    </div>
  );
}

export default App;
