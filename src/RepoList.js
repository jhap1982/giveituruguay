import React, { useState, useEffect } from 'react';
import './RepoList.css';
import logoSvg from './logo.svg'; // Reemplaza 'logo.svg' con la ruta de tu archivo SVG
import repoContentData from './repoContent.json'; // Importa el archivo JSON

const RepoList = () => {
  const [repoContent, setRepoContent] = useState([]);
  const [selectedFolderContent, setSelectedFolderContent] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPill, setSelectedPill] = useState('');

  useEffect(() => {
    setRepoContent(repoContentData); // Utiliza los datos del archivo JSON en lugar de llamar a la API de GitHub
  }, []);

  const excludeDirectories = ['public', 'src']; // Agrega más directorios si es necesario

  const handlePillClick = (folderName) => {
    setSelectedPill(folderName);
    setShowTable(true);
    const selectedFolder = repoContent.find(item => item === folderName);
    setSelectedFolderContent(selectedFolder); // Obtener contenido de la carpeta seleccionada
  };

  const handleBackButtonClick = () => {
    setShowTable(false);
    setSelectedFolderContent([]);
  };

  return (
    <div className="repo-list-container">
      <div className="centered-text">
        <h2>Give It Uruguay!</h2>
        <img src={logoSvg} alt="Logo SVG" className="logo-svg" />
      </div>
      {isLoading ? (
        <div className="loading-screen">
          <p>Cargando...</p>
        </div>
      ) : !showTable ? (
        <div className="pill-container">
          {repoContent.map(item => (
            <div
              key={item}
              className="pill"
              onClick={() => handlePillClick(item)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="selected-folder-container">
          <button onClick={handleBackButtonClick} className="volver-btn">
            Volver a la lista
          </button>
          <h3>Contenido de la carpeta seleccionada: {selectedPill}</h3>
          {selectedFolderContent.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Tamaño</th>
                </tr>
              </thead>
              <tbody>
                {selectedFolderContent.map(item => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.size} bytes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay contenido en esta carpeta.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoList;
