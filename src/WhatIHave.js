import React from 'react';
import './WhatIHave.css';

const WhatIHave = ({ onBack }) => {
    return (
        <div className="what-i-have-container">
            <button className="back-button" onClick={onBack}>
                Back
            </button>

            <h2>What I Have</h2>

            <section>
                <h3>1983</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1983-05-30 - China Club, Hollywood, CA, USA</td>
                            <td>[SBD #1][FLAC] [SBD #1][MP3]</td>
                        </tr>
                        <tr>
                            <td>1983-07-18 - Club Lingerie , Hollywood, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1984</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1984-03-16 - KTTV Studios (Ticke of the Night), Los Angeles, CA, USA</td>
                            <td>[PRO #1][DVD]</td>
                        </tr>

                        <tr>
                            <td>1984-08-11 - Club Lingerie, Los Angeles, CA, USA</td>
                            <td>[SBD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1984-11-15 - Stache and Little Brother's, Columbus, OH, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1984-12-16 - The Bowery, Oklahoma City, OK, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default WhatIHave;
