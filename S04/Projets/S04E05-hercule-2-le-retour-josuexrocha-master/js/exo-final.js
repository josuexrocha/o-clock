/**
 * Ceci est un simple commentaire
 * Il utilise les convention de JSDOC https://jsdoc.app/about-getting-started.html
 * C'est pratique pour donner les infos essentielles en gardant un code lisible
 * En plus il est possible de s'en servir pour générer des documentations automatiques
 * 
 * @property {Array} friends - All the friends
 * @property {object} profil  - Profile info
 */

const app = {
  friends: [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
  ],
  profil: {
    name: 'Hercule',
    inRelationship: true,
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
  },
  /**
   * What need to be done at launch
   */
  init: function() {
    base.fillProfil(app.profil);
    base.printFriends(app.friends);
    base.setBestFriend(app.friends[0]);
    app.createTitle();
    app.displayAllWorks();
    app.checkAvalaibility();
    app.displayNickname();
    app.calculTrends();
    app.displayActivities();
    app.initHandlers();
  },
  /**
   * Generate a nickname
   * @param {string} firstname - A firstname
   * @param {number|string} suffix - A string or number for the department
   * @returns {string} The nickname
   */
  nickname: function(firstname, suffix) {
    const result = firstname + '-du-' + suffix;
    return result;
  },
  /**
   * Give a percentage 
   * @param {number} value - Relative value
   * @param {number} total - Total value
   * @returns {number} The percentage
   */
  percent: function(value, total) {
    let result = value / total * 100;
    result = Math.round(result);
    return result;
  },
  /**
   * Write percentage on one trend
   * @param {number} total -  Number of votes
   * @param {name} string - key for the character name
   */
  setOneTrend: function(total, name) {
    const percent = app.percent(base.vote[name], total);
    const popularityElem = document.querySelector(`#trends-${name} .people__popularity`);
    const barElem = document.querySelector(`#trends-${name} .people__bar`);
    popularityElem.textContent = `${percent}%`;
    barElem.style.width = `${percent}%`;
  },
  /**
   * Create an h1 element
   */
  createTitle: function() {
    const titleElem = document.createElement('h1');
    titleElem.textContent = 'Vous consultez le profil de Hercule';
    titleElem.className = 'banner__title';
    const headerElem = document.getElementById('header-banner');
    headerElem.appendChild(titleElem);
  },
  /**
   * Show all works one by one
   */
  displayAllWorks: function() {
    for (let index = 0; index < 12; index++) {
      base.displayWork(index);
    }
  },
  /**
   * Set the avalailability according to time
   */
  checkAvalaibility: function() {
    const hour = base.getHour();
    const availabilityElem = document.getElementById('availability');
    if (hour > 20 || hour < 8) {
      availabilityElem.textContent = 'Non disponible';
      availabilityElem.classList.add('off');
    }
    else {
      availabilityElem.textContent = 'Disponible';
    }
  },
  /**
   * Sets the nickname
   */
  displayNickname: function() {
    const herculeNickname = app.nickname(app.profil.name, app.profil.department);
    const profilNameElem = document.querySelector('#profil-name');
    profilNameElem.textContent = herculeNickname;
  },
  /**
   * Set votes for hercule and cesar
   */
  calculTrends: function() {
    const voteTotal = base.vote.hercule + base.vote.cesar;
    app.setOneTrend(voteTotal, 'hercule');
    app.setOneTrend(voteTotal, 'cesar');
  },
  /**
   * Filter and display the activities of Hercule
   */
  displayActivities: function() {
    const activitiesElem = document.getElementById('activities');
    activitiesElem.classList.remove('hidden');
    const tasksElem = activitiesElem.querySelector('.tasks');
    for (let index = 0; index < base.activities.length; index++) {
      const activity = base.activities[index];
      if (activity.finished && activity.author === 'Hercule') {
        const liElem = document.createElement('li');
        liElem.textContent = activity.title;
        liElem.className = 'tasks__item';
        const spanElem = document.createElement('span');
        spanElem.textContent = 'tâche accomplie';
        spanElem.className = 'tasks__info';
        liElem.appendChild(spanElem);
        tasksElem.appendChild(liElem);
      }
    }
  },
  /**
   * Listen events
   */
  initHandlers: function() {
    const togglerElem = document.getElementById('menu-toggler');
    togglerElem.addEventListener('click', app.handleClick);
    
    const formElem = document.getElementById('contact');
    formElem.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Hercule ne souhaite pas être dérangé');
    });
  },
  /**
   * Click handler for the menu toggler
   */
  handleClick: function() {
    const bannerElem = document.getElementById('header-banner');
    bannerElem.classList.toggle('banner--open');
  },
};

// Launch init when DOM is ready
document.addEventListener('DOMContentLoaded', app.init);
