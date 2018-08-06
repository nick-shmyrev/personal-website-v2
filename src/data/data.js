const data = {
  jobs: [
    {
      title: 'Front-End Developer',
      companyName: 'NewCompany',
      dates: '2018 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa esse ipsa placeat praesentium. Aperiam atque aut beatae consequatur, consequuntur dignissimos, doloribus natus obcaecati, officiis pariatur quasi reiciendis tenetur velit!',
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
      url: 'https://nick-shmyrev.surge.sh',
      git: 'https://github.com/nick-shmyrev/personal-website-v2',
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
