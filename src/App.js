import React, { useState, useEffect } from 'react';
import RepoList from './RepoList';


const App = () => {
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        fetch('/giveituruguay/tours.json')
        // Cargar el archivo JSON desde la carpeta public
            .then(response => response.json())
            .then(data => setDirectories(data))
            .catch(error => console.error('Error al cargar el archivo JSON', error));
    }, []);

    return (
        <div>
            <RepoList directories={directories} />
        </div>
    );
};

export default App;
