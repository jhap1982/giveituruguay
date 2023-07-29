import React, { useState, useEffect } from 'react';
import './RepoList.css';

const RepoList = () => {
    const [repoContent, setRepoContent] = useState([]);

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

    return (
        <div className="repo-list-container">
            <h2>Give It Uruguay!</h2>
            <div className="pill-container">
                {repoContent.map(item => (
                    <a
                        key={item.name}
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill"
                    >
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RepoList;
