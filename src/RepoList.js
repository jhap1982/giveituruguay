import React, { useState, useEffect } from 'react';
import './RepoList.css';
import logoSvg from './logo.svg'; // Reemplaza 'logo.svg' con la ruta de tu archivo SVG

const RepoList = () => {
  const [repoContent, setRepoContent] = useState([]);
  const [selectedFolderContent, setSelectedFolderContent] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    // Cambia 'jhap1982' por el nombre de usuario y 'giveituruguay' por el nombre del repositorio
    const repoUrl = 'https://api.github.com/repos/jhap1982/giveituruguay/contents';

    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        // Filtrar solo los elementos que son directorios y no son 'public' o 'src'
        const filteredContent = data.filter(item => item.type === 'dir' && item.name !== 'public' && item.name !== 'src');
        setRepoContent(filteredContent);
      })
      .catch(error => {
        console.error('Error fetching repository content:', error);
      });
  }, []);

  const handlePillClick = async (folderName) => {
    const selectedFolder = repoContent.find(item => item.name === folderName);
    if (selectedFolder) {
      const folderUrl = selectedFolder.url;
      const response = await fetch(folderUrl);
      const data = await response.json();
      const folderContent = data.filter(item => item.type === 'dir');
      setSelectedFolderContent(folderContent);
      setShowTable(true);
    }
  };

  const handleBackButtonClick = () => {
    setShowTable(false);
  };

  return (
    <div className="repo-list-container">
      <div className="centered-text">
        <h2>Give It Uruguay!</h2>
        <img src={logoSvg} alt="Logo SVG" className="logo-svg" />
      </div>
      {!showTable ? (
        <div className="pill-container">
          {repoContent.map(item => (
            <div
              key={item.name}
              className="pill"
              onClick={() => handlePillClick(item.name)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="selected-folder-container">
          <button onClick={handleBackButtonClick} className="volver-btn">
            BACK
          </button>
          <h3>Tour</h3>
          {selectedFolderContent.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedFolderContent.map(item => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nothing found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoList;
