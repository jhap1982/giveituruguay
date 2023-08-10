import React from 'react';
import './WhatIHave.css';

const WhatIHave = ({ onBack }) => {
    return (
        <div className="what-i-have-container">

            <button className="back-button" onClick={onBack}>
                Back
            </button>

            <section>
                <h3>1982</h3>
                nope
            </section>

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
                            <td>
                                [SBD #1][FLAC]<br />
                                [SBD #1][MP3]
                            </td>
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

            <section>
                <h3>1985</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1985-01-06 - Club Culture, Santa Cruz, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1985-06-28 - Mason Jar, Phoenix, AZ, USA</td>
                            <td>[AUD #1][FLAC]</td>                            
                        </tr>

                        <tr>
                            <td>1985-07-06 - The Keystone, Palo Alto, CA, USA</td>
                            <td>[AUD #1][SCB][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1985-08-17 - Freilichtbuhne Loreley (Loreley Open Air), St. Goarshausen, Germany</td>
                            <td>
                                [PRO #1][George Clinton][DVD]<br/>
                                [PRO #1][RHL][DVD]
                            </td>
                        </tr>

                        <tr>
                            <td>1985-10-12 - The Keystone, Palo Alto, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1985-10-23 - The Patio, Indianapolis, IN, USA</td>
                            <td>
                                [AMT #1][BONG][DVD]<br />
                                [AMT #1][RHL][DVD]<br />
                                [AUD #1][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1985-11-29 - Roosters, Nashville, TN, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>                        
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1986</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1986-01-18 - The Catalyst, Santa Cruz, CA, USA</td>
                            <td>[MTX #1][FLAC]</td>
                        </tr>    

                        <tr>
                            <td>1986-02-07 - Fender's Ballroom, Long Beach, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>    

                        <tr>
                            <td>1986-05-02 - Astor Park Club, Seattle, WA, USA</td>
                            <td>
                                [SBD #1][APE]<br />
                                [SBD #1][FLAC]<br />
                                [SBD #1][MP3]<br/>
                            </td>
                        </tr>    

                        <tr>
                            <td>1986-02-07 - Fender's Ballroom, Long Beach, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1986-05-26 - The Roxy, Hollywood, CA, USA</td>
                            <td>[PRO #1][Jimi Hendrix Tribute][DVD]</td>
                        </tr>

                        <tr>
                            <td>1986-11-24 - Mississippi Nights, St. Louis, MO, USA</td>
                            <td>
                                [PRO #1][BONG][DVD]<br/>
                                [PRO #1][RHL][DVD]
                            </td>
                        </tr>

                        <tr>
                            <td>1986-11-29 - Hoosier Ballroom, Indianapolis, IN, USA</td>
                            <td>[AMT #1][SCB][DVD]</td>
                        </tr>

                        <tr>
                            <td>1986-12-01 - First Avenue, Minneapolis, MN, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1986-12-03 - Lee's Palace, Toronto, ON, Canada</td>
                            <td>[PRO #1][DVD]</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1987</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1987-02-13 - Scream at Embassy Hotel, Los Angeles, CA, USA</td>
                            <td>[AUD #1][M4A]</td>
                        </tr>

                        <tr>
                            <td>1987-02-22 - Goodies, Fullerton, CA, USA</td>
                            <td>[AUD #1][RLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-07-10 - The Catalyst, Santa Cruz, CA, USA</td>
                            <td>[SBD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-07-11 - The Omni, Oakaland, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-08-07 - ?, Late Show With Arsenio Hall, Hollywood, CA, USA</td>
                            <td>[PRO #1][DVD]</td>
                        </tr>

                        <tr>
                            <td>1987-08-29 - Deja Vu, Phoenix, AZ, USA</td>
                            <td>[SBD #1][1st Show][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-09-20 - Bren Events Center at University of California at Irvine (Vision Skate Escape), Irvine, CA, USA</td>
                            <td title="MPG from VOB DVD file">[PRO #1][DVD][MPG]</td>
                        </tr>

                        <tr>
                            <td>1987-10-22 - Chestnut Cabaret, Philadelphia, PA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-10-24 - Lost Horizon, Syracuse, NY, USA</td>
                            <td>
                                [AUD #1][FLAC]<br />
                                [AUD #2][RLA][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1987-11-08 - City Gardens, Trenton, NJ, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>                       

                        <tr>
                            <td>1987-11-09 - Graffiti's, Pittsburgh, PA, USA</td>
                            <td>[SBD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1987-11-24 - Mississippi Nights, St. Louis, MO, USA</td>
                            <td>[AMT #1][DVD]</td>
                        </tr>

                        <tr>
                            <td>1987-12-26 - Celebrity Theatre, Anaheim, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1988</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1988-00-00 - VPRO Documentary - Europe</td>
                            <td>[PRO #1][Storm][DVD]</td>
                        </tr>

                        <tr>
                            <td>1988-01-24 - ABC Television Center (Star-athon '88), Los Angeles, CA, USA</td>
                            <td>[PRO #1][MPG]</td>
                        </tr>

                        <tr>
                            <td>1988-02-05 - The Loft, Berlin, Germany</td>
                            <td>[AUD #1][RHCPLA][MP3]</td>
                        </tr>

                        <tr>
                            <td>1988-02-11 - Volkshaus, Zurich, Switzerland</td>
                            <td>[SBD #1][RHCPLA][MP3]</td>
                        </tr>

                        <tr>
                            <td>1988-02-17 - Ancienne Belgique, Brussels, Belgium</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-02-17 - BRT TV Studios (Bingo!), Brussels, Belgium</td>
                            <td>[PRO #1][AVI]</td>
                        </tr>

                        <tr>
                            <td>1988-02-20 - Paradiso, Amsterdam, Netherlands</td>
                            <td>[SBD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-03-14 - Montezuma Hall at San Diego State University, San Diego, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-03-27 - John Anson Ford Amphitheatre (Amnesty International Benefit Show), Los Angeles, CA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-04-02 - Raji's, Los Angeles, CA, USA</td>
                            <td>[SBD #1][MP3]</td>
                        </tr>

                        <tr>
                            <td>1988-04-08 - The Catalyst, Santa Cruz, CA, USA</td>
                            <td>[SBD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-04-14 - Mississippi Nights, St. Louis, MO, USA</td>
                            <td>[AUD #1][RLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-04-27 - The Channel, Boston, MA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1988-05-23 - Draf- en Renbaan (Pinkpop Festival), Landgraaf, Netherlands</td>
                            <td>
                                [PRO #1b][DVD]<br />
                                [SBD #1][FLAC]<br />
                                [SBD #2][FLAC]<br/>
                            </td>
                        </tr>

                        <tr>
                            <td>1988-06-04 - ProvinssiRock Festival, Seinajoki, Finland</td>
                            <td>
                                [PRO #1][DVD]<br />
                                [SBD #1][FLAC]<br />
                                [SBD #1][M4A]
                            </td>
                        </tr>

                        <tr>
                            <td>1988-10-01 - Paradise Bowl (2HIP4TV), Los Angeles, CA, USA</td>
                            <td>[PRO #1][MPG]</td>
                        </tr>

                        <tr>
                            <td>1988-10-08 - John Anson Ford Amphitheatre, Los Angeles, CA, USA</td>
                            <td>
                                [AMT #1][BONG][dime][DVD]<br />
                                [AUD #1][RLA][FLAC]
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1989</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1989-03-16 - The Visage, Orlando, FL, USA</td>
                            <td>[AMT #1][DVD]</td>
                        </tr>

                        <tr>
                            <td>1989-03-17 - Jannus Landing, St. Petersburg, FL, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-04-28 - Sundance Club, Bayshore, NY, USA</td>
                            <td>[SBD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-08-26 - Dam Square (UITmarkt Festival), Amsterdam, Netherlands</td>
                            <td>
                                [AMT #1][DVD]<br />
                                [AMT #1][PAL][DVD]<br />
                                [PRO #1][1080i][TS]<br />
                                [AUD #1][RLA][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1989-09-17 - The Catalyst, Santa Cruz, CA, USA</td>
                            <td>
                                [AUD #1][2CDs][FLAC]<br />
                                [AUD #1][RHCPLA][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1989-09-28 - Big Surf Waterpark (KUKQ Alternative Radio Festival), Tempe, AZ, USA</td>
                            <td>
                                [AMT #1][DVD]<br />
                                [AUD #1][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1989-10-01 - Opera House, Austin, TX, USA</td>
                            <td>[MIX #1][RHL][DVD]</td>
                        </tr>

                        <tr>
                            <td>1989-10-05 - Mississippi Nights, St. Louis, MO, USA</td>
                            <td>[AUD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-10-09 - First Avenue, Minneapolis, MN, USA</td>
                            <td>[SBD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-10-20 - The Channel, Boston, MA, USA</td>
                            <td>[AUD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-10-27 - The New Ritz, New York City, NY, USA</td>
                            <td>[SBD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-10-28 - Chestnut Cabaret, Philadelphia, PA, USA</td>
                            <td>[SBD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-11-12 - L'Amour, New York City, NY, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-11-13 - The Chance, Poughkeepsie, NY, USA</td>
                            <td>[AUD #1][RHCPLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-11-18 - The Broathouse, Norfolk, VA, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-11-21 - Phantasy Theatre, Lakewood, OH, USA</td>
                            <td>
                                [SBD #1][FLAC]<br />
                                [SBD #2][FLAC]<br />
                                [SBD #3][FLAC]
                            </td>
                        </tr>

                        <tr>
                            <td>1989-11-22 - Latin Quarter, Detroit, MI, USA</td>
                            <td>[AUD #1][RLA][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-11-27 - Barrymore Theater, Madison, WI, USA</td>
                            <td>[AUD #1][FLAC]</td>
                        </tr>

                        <tr>
                            <td>1989-12-10 - Deco's, Miami Beach, FL, USA</td>
                            <td>[AUD #1][RHCPLA][FLAC]</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1990</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1991</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1992</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1993</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1994</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1995</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>


            <section>
                <h3>1996</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1997</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1998</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>1999</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2000</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>


            <section>
                <h3>2001</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2002</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2003</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2004</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2005</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2006</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2007</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2008</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2009</h3>
                nope
            </section>

            <section>
                <h3>2010</h3>
                nope
            </section>

            <section>
                <h3>2011</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2012</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2013</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2014</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2015</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2016</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2017</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2018</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2019</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2020</h3>
                nope
            </section>

            <section>
                <h3>2021</h3>
                nope
            </section>

            <section>
                <h3>2022</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>2023</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concert</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default WhatIHave;
