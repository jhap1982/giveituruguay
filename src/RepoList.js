import React from 'react';
import './RepoList.css';
import rotatingSvg from './logo.svg'; // Importamos el logo SVG correctamente

const RotatingSvg = () => {
    return (
        <a href="https://giveituruguay.blogspot.com" className="logo-container" target="_blank" rel="noopener noreferrer">
            <img
                className="rotating-logo"
                src={rotatingSvg} // Utilizamos la variable rotatingSvg para el src
                alt="Red Hot Chili Peppers Logo"
            />
        </a>
    );
};

const RepoList = ({ directories }) => {
    return (
        <div className="container">
            <h1>Give It Uruguay, Now!!</h1>
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
            <footer className="footer-container">
                <div>
                    <h2> [[ jhap1982 ~ Sharing since 2002 ]] </h2>
                    <p>
                        The purpose of this site is to have a - github - showcase of Red Hot Chili Peppers tours and related stuff from different sources (*)
                        <br/>
                        A personal project to share what I love. not official material present. Please, buy the official cds/dvds/digital/merch/etc.
                    </p>
                </div>
                
                <div className="footer-references">
                    (*)
                    <a target="_blank" rel="noopener noreferrer" href="https://redhotchilipeppers.com/">[Red Hot Chili Pepepres Site]</a>
                    <a target="_blank" rel="noopener noreferrer" href="http://theside.free.fr">[The Side Tour Story]</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.rhcplivearchive.com">[Red Hot Live Archive]</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://vk.com/rhrsandse">[Rhrsandse]</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.rhcpfrance.com">[RHCP France]</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.rhcpsessions.com">[RHCP Sessions]</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.redhotchilipeppers.com.br">[RHCP Brazil]</a>
                </div>
            </footer>
        </div>
    );
};

export default RepoList;
