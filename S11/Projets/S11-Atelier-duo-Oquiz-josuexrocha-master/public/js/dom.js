// public/js/dom.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Fonction pour animer les éléments avec fade-in
  const animateFadeIn = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in, .card').forEach(el => {
      observer.observe(el);
    });
  };

  // Fonction pour activer les tooltips Bootstrap
  const activateTooltips = () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  };

  // Fonction pour gérer le scroll smooth
  const enableSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };

  // Fonction pour ajouter une classe active aux liens de navigation
  const setActiveNavLink = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  };

  // Fonction pour le slider de texte
  function initTextSlider() {
    const textSlider = document.querySelector('.text-slider');
    if (!textSlider) return;
    const textItems = [
      "Testez vos connaissances sur une variété de sujets passionnants.",
      "Du débutant à l'expert, il y en a pour tous les niveaux.",
      "Apprenez en vous amusant avec nos quiz interactifs.",
      "Découvrez 6 quiz sur cette page et bien plus dans nos thèmes !"
    ];
    const current = textSlider.querySelector('.text-slider-current');
    let currentIndex = 0;
    function updateText() {
      current.style.opacity = '0';
      setTimeout(() => {
        current.textContent = textItems[currentIndex];
        current.style.opacity = '1';
        currentIndex = (currentIndex + 1) % textItems.length;
      }, 500);
    }
    updateText(); // Initial call
    setInterval(updateText, 5000);
  }

  // Exécution des fonctions
  animateFadeIn();
  activateTooltips();
  enableSmoothScroll();
  setActiveNavLink();
  initTextSlider();

  // Gestion spécifique du formulaire de connexion
  const loginForm = document.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      console.log('Login form submitted');
      // Si vous voulez faire quelque chose avant la soumission, faites-le ici
      // Par exemple, validation côté client

      // Ne pas empêcher la soumission du formulaire
      // e.preventDefault();

      // Si vous voulez soumettre le formulaire manuellement après certaines vérifications :
      // e.preventDefault();
      // Faites vos vérifications ici
      // Puis soumettez manuellement si tout est ok :
      // loginForm.submit();
    });
  }

  // Exemple de fonction pour charger plus de contenu (si applicable)
  const loadMoreButton = document.querySelector('#load-more');
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      console.log('Loading more content');
      // Ajoutez ici la logique pour charger plus de contenu
    });
  }
});