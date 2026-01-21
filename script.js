// Parallax + header effect
// Parallax + scroll reveal
// Parallax + scroll reveal + active menu
window.addEventListener('scroll', () => {
document.querySelectorAll('.parallax').forEach(section => {
section.style.backgroundPositionY = -(window.scrollY * 0.4) + 'px';
});


// Reveal sections
document.querySelectorAll('.reveal').forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 120){
el.classList.add('active');
}
});


// Reveal project cards
document.querySelectorAll('.project-card').forEach(card => {
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 120){
card.classList.add('active');
}
});


// Active menu link
document.querySelectorAll('section').forEach(sec => {
const top = window.scrollY;
const offset = sec.offsetTop - 100;
const height = sec.offsetHeight;
const id = sec.getAttribute('id');


if(top >= offset && top < offset + height){
document.querySelectorAll('.header nav a').forEach(a => a.classList.remove('active'));
const activeLink = document.querySelector('.header nav a[href="#'+id+'"]');
if(activeLink) activeLink.classList.add('active');
}
});
});

document.querySelectorAll('.lazy-img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    img.parentElement.classList.add('loaded');
  });
});

const toggle = document.getElementById('themeToggle');
const body = document.body;

// Carrega tema salvo
if(localStorage.getItem('theme') === 'light'){
  body.classList.add('light');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light');

  const isLight = body.classList.contains('light');
  toggle.textContent = isLight ? '☀️' : '🌙';

  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});