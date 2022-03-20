// navigation

const menu = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-item > a');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', function () {
  navbar.classList.toggle('show-links');
  menu.classList.toggle('mobile-menu');
});

navLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    let current = document.querySelector('.link-active');
    console.log(current);
    if (current) {
      current.classList.remove('link-active');
    }
    this.classList.add('link-active');

    navbar.classList.toggle('show-links');
    menu.classList.toggle('mobile-menu');
  });
});

// speakers
const speakersSection = document.querySelector('.speakers');
const cards = document.querySelector('.cards');
const speakersAll = document.querySelectorAll('.speaker-card');

const speakerArticles = document.querySelectorAll('.speaker');
const speakerArticlesList = [...speakerArticles];

speakersAll.forEach(function (item) {
  item.addEventListener('click', function () {
    const classes = item.classList;
    const speakerClass = classes.item(classes.length - 1);
    speakersSection.classList.toggle('hidden');
    const section = speakerArticlesList.filter(function (elem) {
      const sectionId = elem.id.includes(speakerClass);
      if (sectionId) {
        return sectionId;
      }
    });
    section[0].classList.toggle('hidden');
  });
});

let closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    speakersSection.classList.toggle('hidden');
    const sections = e.target.parentElement.parentElement.classList;
    speakerArticlesList.forEach(function (item) {
      const classes = item.classList;
      if (![...classes].includes('hidden')) {
        classes.add('hidden');
      }
    });
  });
});
