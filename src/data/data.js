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
      description: 'Volunteered as a peer mentor for web development students. Assisted with their weekly learning goals and assignments. Reviewed fundamental concepts and methodologies in HTML & CSS, Javascript, jQuery, PHP, Oracle SQL & MySQL, Git. Taught students Adobe Photoshop & Illustrator best practices and techniques.<br>' +
        'Performed code-review sessions, taught troubleshooting, debugging and general workflow optimization techniques.',
    },
    {
      title: 'Jr. Front-End Developer',
      companyName: 'Phone-Market.ru',
      dates: '2015 - 2016',
      description: 'Created new and updated existing landing and product pages using HTML, CSS, JavaScript, jQuery and Bitrix CMS. Prepared product images for publication using Adobe Photoshop and Illustrator. Wrote product descriptions and reviews.',
    },
  ],
  projects: [
    {
      name: 'Hatchways Test',
      description: 'Frontend Assessment',
      img: require('../img/portfolio-images/hatchways-front.jpg'),
      url: 'http://quack-support.surge.sh',
      git: 'https://github.com/nick-shmyrev/frontend-assessment',
    },
    {
      name: 'Indecision',
      description: 'React App',
      img: require('../img/portfolio-images/indecision.jpg'),
      url: 'http://handsome-underwear.surge.sh/',
      git: 'https://github.com/nick-shmyrev/indecision-app',
    },
    {
      name: 'Expensify',
      description: 'Personal finances app',
      img: require('../img/portfolio-images/expensify.jpg'),
      url: 'https://radiant-temple-62692.herokuapp.com',
      git: 'https://github.com/nick-shmyrev/expensify-app',
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
