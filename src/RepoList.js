import React, { useState, useEffect } from 'react';
import './RepoList.css';
import rotatingSvg from './logo12122121.svg'; // Reemplaza 'path-to-your-svg.svg' con la ruta de tu archivo SVG

const RepoList = () => {
    const [repoContent, setRepoContent] = useState([]);
    const [selectedFolderContent, setSelectedFolderContent] = useState([]);

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

    const handlePillClick = (folderName) => {
        // Obtener el contenido de la carpeta seleccionada por el nombre
        const selectedFolder = repoContent.find(item => item.name === folderName);
        if (selectedFolder) {
            const folderUrl = selectedFolder.url;
            fetch(folderUrl)
                .then(response => response.json())
                .then(data => {
                    // Filtrar solo los elementos que son directorios dentro de la carpeta seleccionada
                    const folderContent = data.filter(item => item.type === 'dir');
                    setSelectedFolderContent(folderContent);
                })
                .catch(error => {
                    console.error('Error fetching selected folder content:', error);
                });
        }
    };

    return (
        <div className="repo-list-container">
            <div className="centered-text">
                <h2>Give It Uruguay!</h2>
                <img src={rotatingSvg} alt="Rotating SVG" className="rotating-svg" />
            </div>
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
            {selectedFolderContent.length > 0 && (
                <div className="selected-folder-container">
                    <h3>Contenido de la carpeta seleccionada:</h3>
                    <ul>
                        {selectedFolderContent.map(item => (
                            <li key={item.name}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RepoList;
