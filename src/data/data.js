const data = {
  jobs: [
    {
      title: 'Front-End Developer',
      companyName: '<a href="https://vestrainet.com/" target="_blank" rel="noopener noreferrer">Vestra Inet</a>',
      dates: '2018 - 2018',
      description: 'Developed front-end for 9 projects from PSD/AI/XD graphic mock-ups and designed responsive styles (using CSS media queries) for resolutions up to 320*568px (iPhone 5). <br>' +
        ' Implemented CMS functionality for 5 projects. Collaborated with Back-End Developers to integrate e-commerce projects with Vestranet CMS and design Back-end APIs.<br>' +
        ' Automated image optimization and SASS->CSS compilation tasks using Gulp. Performed manual testing, investigated bug reports and implemented bugfixes for front and back-end related issues.<br>' +
        '<br>' +
        'Technologies: HTML5, CSS3, SASS, Javascript, jQuery, LAMP stack (Linux, Apache, MySQL, PHP) and Vestranet CMS.<br>' +
        'Software: PhpStorm, Git, Avocode, Adode Photoshop & Illustrator.<br>' +
        'Examples of my work: <br><br>' +
        '● <a href="http://grandeurflooring.vestranet.com" target="_blank" rel="noopener noreferrer">Grandeur Flooring</a><br>' +
        '● <a href="http://plmetal.ca" target="_blank" rel="noopener noreferrer">PL Metal Fabrication</a><br>' +
        '● <a href="http://formtechscientific.com" target="_blank" rel="noopener noreferrer">Form Tech Scientific</a><br>' +
        '● <a href="http://destinationfurniture.net" target="_blank" rel="noopener noreferrer">Destination Furniture</a>',
    },
    {
      title: 'Web Developer Mentor',
      companyName: 'Fanshawe College',
      dates: '2017 - 2018',
      description: 'Mentored IT students on programming concepts ( with JavaScript, jQuery, PHP ), databases ( Oracle SQL, MySQL ), web design fundamentals ( HTML, CSS, Adobe Photoshop, Illustrator ) and version control ( Git ). \n' +
        'Performed in-person and online code-review sessions with students. Taught troubleshooting, debugging and workflow optimization techniques.',
    },
    {
      title: 'Jr. Front-End Developer',
      companyName: 'Phone-Market.ru',
      dates: '2015 - 2016',
      description: 'Created new and updated existing landing and product pages using HTML, CSS, JavaScript and Bitrix CMS. Prepared product images for publication using Adobe Photoshop and Illustrator. Wrote product descriptions and reviews.',
    },
  ],
  projects: [
    {
      name: 'Sedona',
      description: 'Travel Destination',
      img: require('../img/portfolio-images/sedona.jpg'),
      url: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/Nick-Shmyrev/sedona/master/index.html',
      git: 'https://github.com/nick-shmyrev/sedona',
    },
    {
      name: 'Indecision',
      description: 'React App',
      img: require('../img/portfolio-images/indecision.jpg'),
      url: 'http://handsome-underwear.surge.sh/',
      git: 'https://github.com/nick-shmyrev/indecision-app',
    },
    {
      name: 'Borodinski',
      description: 'Barbershop',
      img: require('../img/portfolio-images/borodinski.jpg'),
      url: 'https://htmlpreview.github.io/?https://github.com/Nick-Shmyrev/22749-barbershop/blob/master/index.html',
      git: 'https://github.com/nick-shmyrev/22749-barbershop',
    },
    {
      name: 'Portfolio',
      description: 'This Website',
      img: require('../img/portfolio-images/portfolio.jpg'),
      url: 'https://nick-shmyrev.dev',
      git: 'https://github.com/nick-shmyrev/personal-website-v2',
    },
    {
      name: 'PL Metal Fabrication',
      description: 'Local Business',
      img: require('../img/portfolio-images/plmetal.jpg'),
      url: 'http://plmetal.ca/',
    },
    {
      name: 'Hi Tech Reno Services',
      description: 'Local Business',
      img: require('../img/portfolio-images/htr.jpg'),
      url: 'https://hitechrenoservices.com/',
    },
    {
      name: 'Destination Furniture',
      description: 'Local Business',
      img: require('../img/portfolio-images/df.jpg'),
      url: 'http://destinationfurniture.net/',
    },
    {
      name: 'Form Tech Scientific',
      description: 'Local Business',
      img: require('../img/portfolio-images/fts.jpg'),
      url: 'https://formtechscientific.com/',
    },
    {
      name: 'Grandeur Flooring',
      description: 'Local Business',
      img: require('../img/portfolio-images/grandeur.jpg'),
      url: 'http://grandeurflooring.vestranet.com/',
    },
    {
      name: 'A New Project',
      description: 'Maybe yours?',
      img: require('../img/portfolio-images/placeholder_project.jpg'),
      url: '/contact',
      git: '',
    },
  ],
};

export default data;
