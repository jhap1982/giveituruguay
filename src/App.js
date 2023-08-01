import React from 'react';
import RepoList from './RepoList';

const App = () => {
  // Definimos el valor de directories aquí
  const directories = [
    {
      name: '1982',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1982'
    },
    {
      name: '1983',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1983'
    },
    {
      name: '1984',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1984'
    }, 
    {
      name: '1985',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1985'
    },
    {
      name: '1986',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1986'
    },
    {
      name: '1987',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1987'
    },
    {
      name: '1988',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1988'
    },
    {
      name: '1989',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1989'
    },
    {
      name: '1990',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1990'
    },
    {
      name: '1991',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1991'
    },
    {
      name: '1992',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1992'
    },
    {
      name: '1993',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1993'
    },
    {
      name: '1994',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1994'
    },
    {
      name: '1995',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1995'
    },
    {
      name: '1996',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1996'
    },
    {
      name: '1997',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1997'
    },
    {
      name: '1998',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1998'
    },
    {
      name: '1999',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/1999'
    },
    {
      name: '2000',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2000'
    },
    {
      name: '2001',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2001'
    },
    {
      name: '2002',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2002'
    },
    {
      name: '2003',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2003'
    },
    {
      name: '2004',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2004'
    },
    {
      name: '2005',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2005'
    },
    {
      name: '2006',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2006'
    },
    {
      name: '2007',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2007'
    },
    {
      name: '2008',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2008'
    },
    {
      name: '2009',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2009'
    },
    {
      name: '2010',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2010'
    },
    {
      name: '2011',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2011'
    },
    {
      name: '2012',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2012'
    },
    {
      name: '2013',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2013'
    },
    {
      name: '2014',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2014'
    },
    {
      name: '2015',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2015'
    },
    {
      name: '2016',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2016'
    },
    {
      name: '2017',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2017'
    },
    {
      name: '2018',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2018'
    },
    {
      name: '2019',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2019'
    },
    {
      name: '2020',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2020'
    },
    {
      name: '2021',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2021'
    },
    {
      name: '2022',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2022'
    },
    {
      name: '2023',
      link: 'https://github.com/jhap1982/giveituruguay/tree/main/2023'
    }
  ];

  return (
    <div>
      <RepoList directories={directories} />
    </div>
  );
};

export default App;
