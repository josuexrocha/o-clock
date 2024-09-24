console.log('test 1...2...1...2');
// exo 1 cf index.html juste avant la fermeture du body

// exo 2
const profil = {
  name: 'Hercule',
  inRelationship: true,
  job: 'Demi-dieu',
  age: 35,
  department: 75,
  arm: 60.5,
};
base.fillProfil(profil);

// exo 3
const friends = [
  'Jupiter',
  'Junon',
  'Alcmène',
  'Déjanire',
];
base.printFriends(friends);
base.setBestFriend(friends[0]);

// exo 4
const titleElem = document.createElement('h1');
titleElem.textContent = 'Vous consultez le profil de Hercule';
titleElem.className = 'banner__title';
const headerElem = document.getElementById('header-banner');
headerElem.appendChild(titleElem);

// exo 5
for (let index = 0; index < 12; index++) {
  base.displayWork(index);
}

// exo 6
const hour = base.getHour();
const availabilityElem = document.getElementById('availability');
if (hour > 20 || hour < 8) {
  availabilityElem.textContent = 'Non disponible';
  availabilityElem.classList.add('off');
}
else {
  availabilityElem.textContent = 'Disponible';
}

// exo 7
function nickname(firstname, suffix) {
  const result = firstname + '-du-' + suffix;
  return result;
}
const herculeNickname = nickname(profil.name, profil.department);
const profilNameElem = document.querySelector('#profil-name');
profilNameElem.textContent = herculeNickname;

// exo 8
const togglerElem = document.getElementById('menu-toggler');
function handleClick() {
  const bannerElem = document.getElementById('header-banner');
  bannerElem.classList.toggle('banner--open');
}
togglerElem.addEventListener('click', handleClick);

// exo 9
const formElem = document.getElementById('contact');
function handleSubmit(event) {
  event.preventDefault();
  alert('Hercule ne souhaite pas être dérangé');
}
formElem.addEventListener('submit', handleSubmit);

// bonus exo 10
function percent(value, total) {
  let result = value / total * 100;
  result = Math.round(result);
  return result;
}
const voteTotal = base.vote.hercule + base.vote.cesar;
const herculePercent = percent(base.vote.hercule, voteTotal);
const herculeElem = document.querySelector('#trends-hercule .people__popularity');
const herculeBarElem = document.querySelector('#trends-hercule .people__bar');
herculeElem.textContent = herculePercent + '%';
herculeBarElem.style.width = herculePercent + '%';
const cesarPercent = percent(base.vote.cesar, voteTotal);
const cesarElem = document.querySelector('#trends-cesar .people__popularity');
const cesarBarElem = document.querySelector('#trends-cesar .people__bar');
cesarElem.textContent = cesarPercent + '%';
cesarBarElem.style.width = cesarPercent + '%';

// bonus exo 11 cf exo-final.js

// bonus exo 12
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
