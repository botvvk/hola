import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Vivek Tiwari',
  subtitle: "I'm Django Developer",
  cta: 'Know more ',
};

// ABOUT DATA
export const aboutData = {
  img: 'vvk.jpg',
  paragraphOne:
    "I'm an aspiring Django Developer and a Computer science graduate, currently on some internship work. A couple of years back when I was introduced to the world of web development, the endless possibilities of what we can do with this skill blew my mind away. And I have been caught in its web ever since. And I never plan on stopping.",
  paragraphTwo:
    'I am passionately in love with the technologies I have learned in this long journey and really looking forward to increase the depth of my understanding of these technologies as I finally start looking for employement openly.',
  paragraphThree:
    'Skills :  Python, Django, Restful APIs, HTML, CSS , Javascript, Bootstrap, Jquery',
  resume: 'https://drive.google.com/file/d/19uz1WdMSetVw8uSDFsy4fZzF4I9XPNNL/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'vvcart.png',
    title: 'E-Commerce App',
    info:
      'A massive Ecommerce app made with Python, Django, Bootstrap, Jquery, Html, CSS, Javascript and covers a lot of advanced concepts.',
    info2: '',
    url: 'http://vvkcart.pythonanywhere.com/shop/',
    repo: 'https://github.com/botvvk/vvcart', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'vvk.png',
    title: 'Text_Utils Web App',
    info: 'A simple Text-utils web app to analyse Text develop using Python, Django, Bootstrap',
    info2: '',
    url: 'http://vvtextutils.pythonanywhere.com/',
    repo: 'https://github.com/botvvk/vvtextutils', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact info : +91-8700549041',
  btn: '',
  email: 'mailto:vivekt077@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://www.facebook.com/VivekUzumaki',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vivek-tiwari-b79840118/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/botvvk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
