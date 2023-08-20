import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import project1 from '/ecomerce.png'
import project2 from '/pokedex.png'
import project3 from '/rickymorty.png'
import project4 from '/weather.png'

  export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

  export  const portfolio = [
  {
    id: "selector-1",
    dire:"item-1",
    img: project1,
    title: 'e-commerce',
    details: [
      {
        icon: <span className='item__icon'><i className='bx bx-file' ></i></span>,
        title: 'Project : ',
        desc: 'E-commerce',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-code-alt' ></i></span>,
        title: 'Lenguaje : ',
        desc: 'React js',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-library'></i></span>,
        title: 'Librerias : ',
        desc: 'Axios react-Hook-Form React-Router Redux Bootstrap bootswatch',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-link' ></i></span>,
        title: 'Link : ',
        desc: `https://nicolasbernardportafolio.netlify.app/`,
      },
    ],
  },

  {
    id: "selector-2",
    dire:"item-2",
    img: project2,
    title: 'pokedex',
    details: [
      {
        icon: <span className='item__icon'><i className='bx bx-file' ></i></span>,
        title: 'Project : ',
        desc: 'Pokedex',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-code-alt' ></i></span>,
        title: 'Lenguaje : ',
        desc: 'React js',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-library'></i></span>,
        title: 'Librerias : ',
        desc: 'Axios React-Router Redux',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-link' ></i></span>,
        title: 'Link : ',
        desc: `https://pokedex-nb-ap.netlify.app/`,
      },
    ],
  },

  {
    id: "selector-3",
    dire:"item-3",
    img: project3,
    title: 'rick and morty Locations',
    details: [
      {
        icon: <span className='item__icon'><i className='bx bx-file' ></i></span>,
        title: 'Project : ',
        desc: 'Rick and Morty Locations',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-code-alt' ></i></span>,
        title: 'Lenguaje : ',
        desc: 'React js',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-library'></i></span>,
        title: 'Librerias : ',
        desc: 'Axios',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-link' ></i></span>,
        title: 'Link : ',
        desc: `https://rickandmortylocations-nb.netlify.app/`,
      },
    ],
  },

  {
    id: "selector-4",
    dire:"item-4",
    img: project4,
    title: 'weather Page',
    details: [
      {
        icon: <span className='item__icon'><i className='bx bx-file' ></i></span>,
        title: 'Project : ',
        desc: 'Weather Page',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-code-alt' ></i></span>,
        title: 'Lenguaje : ',
        desc: 'React js',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-library'></i></span>,
        title: 'Librerias : ',
        desc: 'Axios',
      },
      {
        icon: <span className='item__icon'><i className='bx bx-link' ></i></span>,
        title: 'Link : ',
        desc: `https://weather-page-nicolas-bernard.netlify.app/`,
      },
    ],
  },
];

