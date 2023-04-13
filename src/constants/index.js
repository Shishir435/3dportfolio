import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  express,
  bootstrap,
  threejs,
  frontEnd,
  backEnd,
  webDesign,
  weatherApp,
  youtubeClone,
  todo,
  googleClone,
  signupForm,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'service',
    title: 'Service',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web Designer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'bootstap',
    icon: bootstrap,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'Front-End Developer',

    icon: frontEnd,
    iconBg: '#383E56',

    points: [
      'Implementing design for mobile sites',
      'Maintaining software workflow management.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Testing the site for usability and fixing any bugs',
      'Bringing a concept to life with React and JavaScript',
    ],
  },
  {
    title: 'Back-end Developer',

    icon: backEnd,
    iconBg: '#E6DEDD',
    points: [
      'Database creation, integration, and management.',
      'Back-end frameworks to build server-side software.',
      'API integration with database using Web server technologies.',
      'Backing up and restoring technologies for a websites files and DB.',
      'Content management system development, deployment, and maintenance.',
    ],
  },
  {
    title: 'Web Designer',
    icon: webDesign,
    iconBg: '#383E56',
    points: [
      ' frames a solution or strategy to deliver the best experience to the user.',
      'Create user flows, wireframes, prototypes, low-fidelity mockups, and high-fidelity mockups.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Create user-centered designs based on customer voices, user journeys, feedback, and usability discoveries.',
    ],
  },
]

const projects = [
  {
    name: 'YouTube Clone',
    index: 1,
    description:
      'Api-based clone application for searching and watching YouTube videos. It also has a sidebar with various video categories.',
    tags: [
      {
        id: 4,
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        id: 5,
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        id: 6,
        name: 'materialui',
        color: 'pink-text-gradient',
      },
    ],
    image: youtubeClone,
    source_code_link: 'https://github.com/Shishir435/youtube-clone',
    live_demo_link: 'https://cloneyoutubeap.netlify.app/',
  },
  {
    name: 'Weather App',
    index: 2,
    description:
      'A web application allows users to search the weather of any city worldwide and see the forecast for the next seven days.',
    tags: [
      {
        id: 1,
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        id: 2,
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        id: 3,
        name: 'swiperjs',
        color: 'pink-text-gradient',
      },
    ],
    image: weatherApp,
    source_code_link: 'https://github.com/Shishir435/Weather-app/',
    live_demo_link: 'https://shishir-weather-app.netlify.app/',
  },
  {
    name: 'Todo List',
    index: 3,
    description:
      'A todo list app that allows users to add and delete items. You can also create multiple lists and see all indexes in the all lists section.',
    tags: [
      {
        id: 7,
        name: 'express',
        color: 'blue-text-gradient',
      },
      {
        id: 8,
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        id: 9,
        name: 'ejs',
        color: 'pink-text-gradient',
      },
    ],
    image: todo,
    source_code_link: 'https://github.com/Shishir435/todo',
    live_demo_link: 'https://listsv1.onrender.com/',
  },
  {
    name: 'Google Search clone',
    index: 4,
    description:
      'A todo list app that allows users to add and delete items. You can also create multiple lists and see all indexes in the all lists section.',
    tags: [
      {
        id: 10,
        name: 'express',
        color: 'blue-text-gradient',
      },
      {
        id: 11,
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        id: 12,
        name: 'ejs',
        color: 'pink-text-gradient',
      },
    ],
    image: googleClone,
    source_code_link: 'https://github.com/Shishir435/todo',
    live_demo_link: 'https://googlezclone.netlify.app/',
  },
  {
    name: 'Signup-form',
    index: 5,
    description:
      'A todo list app that allows users to add and delete items. You can also create multiple lists and see all indexes in the all lists section.',
    tags: [
      {
        id: 13,
        name: 'express',
        color: 'blue-text-gradient',
      },
      {
        id: 14,
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        id: 15,
        name: 'ejs',
        color: 'pink-text-gradient',
      },
    ],
    image: signupForm,
    source_code_link: 'https://github.com/Shishir435/todo',
    live_demo_link: 'https://fir-auth-9e239.web.app/',
  },
]

export { services, technologies, experiences, projects }