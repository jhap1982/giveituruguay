import React from "react";
import "./RepoList.css";
import rotatingSvg from "./logo.svg";

const RepoList = () => {
  const directories = [
    "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989",
    "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997",
    "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005",
    "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013",
    "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021",
    "2022", "2023"
  ];

  return (
    <div>
      <div className="logo-container">
        <img src={rotatingSvg} alt="Logo" className="rotating-logo" />
      </div>
      <h2>Give It Uruguay!</h2>
      <div>
        <ul className="repo-list">
          {directories.map((directory, index) => (
            <li key={index}>
              <a
                href={`https://github.com/jhap1982/giveituruguay/tree/main/${directory}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                {directory}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepoList;
