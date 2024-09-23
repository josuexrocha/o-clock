/**
 * HOP HOP HOP ! Pas touche !
 * !!! --- NE PAS MODIFIER CE FICHIER --- !!!
 * Rien ne t'empêche de lire ce code et d'essayer de le comprendre.
 * Mais il n'est pas la pour ça : c'est le code qui vérifie ton challenge dans la page index.html.
 */

/*Check exo 1*/

// test présence variables
function checkVar(varName, value, domElemId) {
  const checkElem = document.getElementById(domElemId);
  // booya l'astuce trop belle: on try eval, si ça catch c'est que la variale n'existe pas.
  try {
    const zeVar = eval(varName);

    if (!value || zeVar == value ||
      (typeof zeVar == 'string' && zeVar.toLowerCase() == value.toLowerCase()) ) {
      checkElem.innerHTML = '&#10003;';
      checkElem.style.color = 'green';
      checkElem.className = 'valid';
    } else {
      checkElem.textContent = 'pas la bonne valeur';
      checkElem.style.color = 'orange';
    }
  } catch (err) {
    checkElem.textContent = 'X'
    checkElem.style.color = 'red';
  }
}
function checkExo1 () {
  checkVar('question1', 'quelle mer borde la ville de sébastopol ?', 'check_1_1');
  checkVar('solution1', 'la mer noire', 'check_1_2');
  checkExoComplete('#exo1', 2);

}

/* Check exo 2 */
function checkExo2 () {
  checkVar('response1', null, 'check_2_0');

  let checkElem = document.getElementById('check_2_1');
  if (window.check_2_1_call) {
    checkElem.innerHTML = '&#10003;';
    checkElem.style.color = 'green';
    checkElem.className = 'valid';
  } else {
    checkElem.textContent = 'X'
    checkElem.style.color = 'red';
  }

  //checkElem = document.getElementById('check_2_2');
  checkElem = window.check_2_2;
  if (window.alert_count > 0) {
    checkElem.innerHTML = '&#10003;';
    checkElem.style.color = 'green';
    checkElem.className = 'valid';
  } else {
    checkElem.textContent = 'X'
    checkElem.style.color = 'red';
  }

  checkExoComplete('#exo2', 3);

}

function checkExo3 () {
  checkVar('question2', "quel est l'âge du capitaine ?", "check_3_0");
  checkVar('solution2', 63, "check_3_1");
  checkVar('response2', null, "check_3_2");
  checkExoComplete('#exo3', 3);
}

function checkExoComplete(selector, length ) {
  const elem = document.querySelector(selector+' .check');
  if (document.querySelectorAll(selector+' .valid').length == length) {
    elem.innerHTML = '&#10003;';
    elem.style.color = 'green';
  } else {
    elem.textContent = 'X'
    elem.style.color = 'red';
  }
}

function totalCheck () {
  checkExo1();
  checkExo2();
  checkExo3();
}

// on surcharge alert et prompt pour rajouter un test et des compteurs (malin!)
const old_alert = window.alert;
window.alert_count = 0;
window.alert = function (str) {
  window.alert_count ++;
  return old_alert(str);
}

const old_prompt = window.prompt;
window.prompt_count = 0;
window.prompt = function (msg, dft) {
  window.prompt_count ++;
  // check exo 2
  if (msg === 'Quelle mer borde la ville de Sébastopol ?') {
    window.check_2_1_call = true;
  }
  return old_prompt(msg,dft);
}
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(totalCheck, 100);
});
